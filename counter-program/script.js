const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const numberLabel = document.getElementById("numberLabel");
let count = 0;

increaseBtn.onclick = function () {
    count++;
    numberLabel.textContent = count;
}

decreaseBtn.onclick = function () {
    count--;
    numberLabel.textContent = count;
}
resetBtn.onclick = function () {
    count = 0;
    numberLabel.textContent = count;
}
