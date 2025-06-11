document.addEventListener('DOMContentLoaded', function () {
new Cleave('.cardNumber', {
    creditCard: true,
});

new Cleave(".cardDate", {
    date: true,
    datePattern: ['m','y']
});

new Cleave(".cardCVV", {
    blocks:[3],
    numericOnly: true
});

new Cleave(".cardOwnerName", {
    blocks:[20],
    uppercase: true,
    onValueChanged: function(e) {
    console.log("Можно смонтировать функцию");
  }
});

new Cleave(".cardOwnerSurname", {
    blocks:[20],
    uppercase: true,
    
});

new Cleave(".paymentValue", {
    numeral:true,
    prefix: "₽ ",
    numeralThousandsGroupStyle: 'thousand' 
});

new Cleave(".phonenumber", {
    phone: true,
    phoneRegionCode: 'ru'
});

new Cleave(".secretkey", {
    prefix: "ВОР",
    delimiters: ["-","-","-","-"],
    blocks: [3,3,4,2,1],
    numericOnly: true

});



});