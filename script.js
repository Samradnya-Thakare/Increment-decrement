const pricePerUnit = 500.0;

const quantElement = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');

function inc() {
    let quantity = parseInt(quantElement.innerText);
    quantElement.innerText = ++quantity;
    totalPriceElement.textContent = (quantity * pricePerUnit).toFixed(2);
}
function dec() {
    let quantity = parseInt(quantElement.innerText);
    if(quantity>1){
    quantElement.innerText = --quantity;
    }
    totalPriceElement.textContent = (quantity * pricePerUnit).toFixed(2);
}