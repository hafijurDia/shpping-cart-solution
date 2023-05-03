//common function for phone and case total price
function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const phoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(phoneTotalString);
    return currentPhoneTotal;
}

// common function for subtotal tax and final total
function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
//function for subtotal
function calculateSubtotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    setTextElementValueById('sub-total',currentSubTotal);
    
    setTextElementValueById('final-total');
    //calculate tax
    const taxAmount = (currentSubTotal * 0.1).toFixed(2);
    const taxAmountFloat = parseFloat(taxAmount);
    setTextElementValueById('tax-amount',taxAmountFloat);

    const finalTotal = currentSubTotal + taxAmountFloat;
    setTextElementValueById('final-total',finalTotal);
}