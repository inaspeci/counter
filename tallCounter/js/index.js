const decrimentButton = document.querySelector('[data-ui="decriment"]');
const incrimmentButton = document.querySelector('[data-ui="increment"]');
const numberEl = document.querySelector('[data-ui="number"]');
const resetButton = document.querySelector('[data-ui="reset"]');

function increment(){
   
    decrimentButton.disabled = false;
    let formattedNumber = parseInt(numberEl.textContent);
    formattedNumber = ++formattedNumber

    return numberEl.textContent = formattedNumber.toString();
}

function decriment(){
    let decrimentedNummer = parseInt(numberEl.textContent);
    decrimentedNummer = --decrimentedNummer;
    if(decrimentedNummer === 0){
        decrimentButton.disabled = true;
    }
    return numberEl.textContent = decrimentedNummer.toString();
}

function reset(){
    decrimentButton.disabled = true;
    return numberEl.textContent = "0";
}

function confirmReset(){
    const text = "Do you want to reset counter?"
    
    if(confirm(text)){
        reset();
    }
}

decrimentButton.addEventListener("click",() => {
    decriment();
});

incrimmentButton.addEventListener("click",() => {
    increment();
});

resetButton.addEventListener("click",()=>{
    confirmReset();
});
