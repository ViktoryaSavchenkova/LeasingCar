const swiper = new Swiper('.swiper',{

  direction: 'horizontal',
  loop: true,
  speed:100,


  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

function calculate() {
  var carValue = document.getElementById("car-value-input").value;
  var initialPayment = document.getElementById("initial-payment-input").value;
  var leaseTerm = document.getElementById("lease-term-input").value;

  var monthlyPayment = (carValue -( carValue * (0.01 * initialPayment) ) ) / leaseTerm;
  document.getElementById("monthly-payment").value = Math.round(monthlyPayment);

  var leaseContractAmount = initialPayment +(0.01 * leaseTerm) * monthlyPayment;
  document.getElementById("lease-contract-amount").value = Math.round(leaseContractAmount);

};

function updateCarValueInput(car_value) {
  car_value = car_value > 6000000 ? 6000000 : car_value;
  car_value = car_value < 1000000 ? 1000000 : car_value;
  document.getElementById('car-value-input').value = car_value;
  document.getElementById('car-value').value = car_value;
};

function updateInitallPayment(initial_payment) {
  initial_payment = initial_payment > 60 ? 60 : initial_payment;
  initial_payment = initial_payment < 10 ? 10 : initial_payment;
  document.getElementById('initial-payment-input').value = initial_payment;
  document.getElementById('initial-payment').value = initial_payment;
};

function updateLeasingTerm(leasing_term) {
  leasing_term = leasing_term > 60 ? 60 : leasing_term;
  leasing_term = leasing_term < 1 ? 1 : leasing_term;
  document.getElementById('lease-term-input').value = leasing_term;
  document.getElementById('lease-term').value = leasing_term;
};

