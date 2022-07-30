const billingChanging = document.querySelector('.billing-changing');
const billingCircle = document.querySelector('.billing-circle');
const rangeInput = document.querySelector('#range');
let monthlyBilling = true;

billingChanging.addEventListener('click', () => {
    let priceTime = document.querySelector('.price-time')
    let discountMobile = document.querySelector('.discount--mobile');
    let discountDesktop = document.querySelector('.discount--desktop');
    billingCircle.classList.toggle('active');
    monthlyBilling = !monthlyBilling;
    if(monthlyBilling){
        priceTime.innerHTML = ' / month';
        discountDesktop.innerHTML = '25% discount';
        discountMobile.innerHTML = '50% discount';
    }else {
        priceTime.innerHTML = ' / year';
        discountDesktop.innerHTML = '-50%';
        discountMobile.innerHTML = '-25%';
    }
})

rangeInput.addEventListener('change', () => {
    document.querySelector('.price-price').innerHTML = `$${rangeInput.value}`;
})

