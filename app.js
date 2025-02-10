import countryList from "./countryCodes.js";

const URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";

let options=document.querySelectorAll(".converterCard select");

async function bruh(){
    let list = await fetch(URL);
        
}


for (let select of options){
    for(let code in countryList){
        let op=document.createElement("option");
        op.value=code;
        op.innerText=code;
        select.append(op);
    }
    select.addEventListener("change",(ent)=>{
        console.log(ent);
    });
}




