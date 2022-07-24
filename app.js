const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const error = document.querySelector('.error');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');


//input type="number" - nie działa w Firefox, poniżej rozwiązanie ze StackOverflow

document.querySelector('#price').addEventListener('keydown', function(evt){
        !/(^\d*\.?\d*$)|(Backspace|Control|Meta|a)/.test(evt.key) && evt.preventDefault()
  });

document.querySelector('#people').addEventListener('keydown', function(evt){
      !/(^\d*\.?\d*$)|(Backspace|Control|Meta|a)/.test(evt.key) && evt.preventDefault()
      });
 
    


const showBill = () => {
    
    if(price.value == '' || people.value == '' || tip.value == 0) {
        error.textContent = 'complete all fields!';
        costInfo.style.display = 'none';
    }
    else {
        error.textContent = '';
        countBill();
    };
      
};

const countBill = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseFloat(people.value);
    const newTip = parseFloat(tip.value);
    const sum = (newPrice + (newPrice * newTip))  / newPeople;

    costInfo.style.display = 'block';
    cost.textContent = sum.toFixed(2);

}

countBtn.addEventListener('click', showBill);


const btnClear = document.querySelector('.clear');
const inputs = document.querySelectorAll('input');



btnClear.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');

});