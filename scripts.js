let cl;

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

cl = new Cleave(".paymentValue", {
    numeral:true,
    prefix: "₽ ",
    numeralThousandsGroupStyle: 'thousand',
    rawValueTrimPrefix: true
 
});

new Cleave(".phonenumber", {
    phone: true,
    phoneRegionCode: 'RU'
});

new Cleave(".secretkey", {
    prefix: "ВОР",
    delimiters: ["-","-","-","-"],
    blocks: [3,3,4,2,1],
    numericOnly: true,
    noImmediatePrefix: true

});

const payButton = document.getElementById("payButton");
  payButton.addEventListener("click", function () {
    const data = {
      cardNumber: document.querySelector(".cardNumber").value,
      cardDate: document.querySelector(".cardDate").value,
      cardCVV: document.querySelector(".cardCVV").value,
      ownerName: document.querySelector(".cardOwnerName").value,
      ownerSurname: document.querySelector(".cardOwnerSurname").value,
      paymentValue: document.querySelector(".paymentValue").value,
      phoneNumber: document.querySelector(".phonenumber").value,
      secretKey: document.querySelector(".secretkey").value,
    };
    console.log(cl.getRawValue());
    console.log("Данные для оплаты:", data);
  });

});