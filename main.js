let start = new Date(2024, 0, 1);
const startNumber = 3255728347.20;
const startnumber2 = 13865964;
const changeNumber = document.querySelector('.number');
const changeNumber2 = document.querySelector('.number2');
setInterval(changeIntoNewNumber, 1000)

function changeIntoNewNumber() {
    const now = new Date();
    let secondsSinceStart = Math.floor((now - start) / 1000);
    let newValue = secondsSinceStart*21.24+startNumber;
    let newValue2 = secondsSinceStart*0.09+startnumber2;
    changeNumber.innerHTML = newValue.toFixed(2)
    changeNumber2.innerHTML = newValue2.toFixed(2)
}