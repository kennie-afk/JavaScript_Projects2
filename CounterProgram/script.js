const counterLabel = document.getElementById("counterLabel");
const IncreaseBtn = document.getElementById("IncreaseBtn");
const DecreaseBtn = document.getElementById("DecreaseBtn");
const ResetBtn = document.getElementById("ResetBtn");

let counter = 0;

IncreaseBtn.onclick = function () {
    counter++;
    counterLabel.textContent = counter;
};

DecreaseBtn.onclick = function () {
    counter--;
    counterLabel.textContent = counter;
};

ResetBtn.onclick = function () {
    counter = 0;
    counterLabel.textContent = counter;
};
