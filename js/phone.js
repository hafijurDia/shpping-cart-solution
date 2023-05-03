
//phone number update function
function phoneNumberUpdate(isIncrease){
    const phoneInputFiled = document.getElementById('phone-input-field');
    const phoneString  = phoneInputFiled.value;
    const phoneNumber = parseInt(phoneString);
    let phoneTotalNumber;
    if (isIncrease === true) {
        phoneTotalNumber = phoneNumber + 1;
    }else{
        phoneTotalNumber = phoneNumber - 1;
    }
    phoneInputFiled.value = phoneTotalNumber;

    return phoneTotalNumber;
}

//phone total price update
function totalphonePrice(phoneTotalNumber){
    const phoneElement = document.getElementById('phone-total');
    const totalphonePrice = phoneTotalNumber * 1219;
    phoneElement.innerText = totalphonePrice;
}


//incease phone item
document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const phoneTotalNumber = phoneNumberUpdate(true);
    totalphonePrice(phoneTotalNumber)

    //calculate subtotal price
    calculateSubtotal()


})

//decrease phone item
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const phoneTotalNumber = phoneNumberUpdate(false);
    totalphonePrice(phoneTotalNumber)

     //calculate subtotal price
     calculateSubtotal()
    

})