import curCodes from "./countryCodes.js";

const URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
let selectors=document.querySelectorAll(".converterCard select");
let FROM="usd",TO="inr";
let inputBox=document.querySelector("#input");

let submitButton=document.querySelector("button");

function computeResult(multiplier){
    let result=document.querySelector(".result");
    let computedResult=inputBox.value * multiplier;
    result.innerText=`${inputBox.value} ${FROM.toUpperCase()} = ${computedResult.toFixed(3)} ${TO.toUpperCase()}`
}
async function computeMultiplier(){
    let newURL=URL+`/${FROM}.json`;
    let list = await fetch(newURL);
    let data = await list.json();
    let multiplier=data[`${FROM}`][`${TO}`];
    computeResult(multiplier);

}

function update(curCode,identifier){
    if(identifier.name=="currency1"){
        FROM=curCode.toLowerCase();
    }
    else{
        TO=curCode.toLowerCase();
    }
}

for (let select of selectors){
    for(let curCode in curCodes){
        let option=document.createElement("option");
        option.value=curCode;
        option.innerText=curCode;
        select.append(option);
        if (select.name === "from" && curCode === "USD") {
            option.selected = "selected";
        } else if (select.name === "to" && curCode === "INR") {
            option.selected = "selected";
        }
        
    }
    select.addEventListener("change",(event)=>{
        update(event.target.value,select);
    });
}
submitButton.addEventListener("click",(event)=>{
    event.preventDefault();
    computeMultiplier();
    
});



