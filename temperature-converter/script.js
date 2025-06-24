const celsiusInput = document.getElementById("celsiusInput");
const fahrenheitInput = document.getElementById("fahrenheitInput");
const inputBox = document.getElementById("inputBox");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
let temp;

submitBtn.onclick = function (event) {
    event.preventDefault();
    if (celsiusInput.checked) {
        temp = Number(inputBox.value);
        temp = temp * 9 / 5 + 32
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if (fahrenheitInput.checked) {
        temp = Number(inputBox.value);
        temp = (temp - 32) * 5 / 9;;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent="Select a unit";
    }
}