
//case number update function
function caseNumberUpdate(isIncrease){
    const caseInputFiled = document.getElementById('case-input-field');
    const caseString  = caseInputFiled.value;
    const caseNumber = parseInt(caseString);
    let caseTotalNumber;
    if (isIncrease === true) {
        caseTotalNumber = caseNumber + 1;
    }else{
        caseTotalNumber = caseNumber - 1;
    }
    caseInputFiled.value = caseTotalNumber;

    return caseTotalNumber;
}

//case total price update
function totalCasePrice(caseTotalNumber){
    const caseElement = document.getElementById('case-total');
    const totalCasePrice = caseTotalNumber * 59;
    caseElement.innerText = totalCasePrice;
}

//incease case item
document.getElementById('btn-case-plus').addEventListener('click',function(){
    const caseTotalNumber = caseNumberUpdate(true);
    totalCasePrice(caseTotalNumber)

    //calculate subtotal price
    calculateSubtotal()
})

//decrease case item
document.getElementById('btn-case-minus').addEventListener('click',function(){
    const caseTotalNumber = caseNumberUpdate(false);
    totalCasePrice(caseTotalNumber)

    //calculate subtotal price
    calculateSubtotal()
    

})