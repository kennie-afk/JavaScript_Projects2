const button = document.getElementById("button");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");

const reset = document.getElementById("reset");

const min = 1;
const max = 6;

// Function to generate a random number
function getRandomNumber() {
    return Math.floor(Math.random() * max) + min;
}

button.onclick = function() {
    output1.textContent = getRandomNumber();
    output2.textContent = getRandomNumber();
    output3.textContent = getRandomNumber();

}
reset.onclick = function(){
    output1.textContent = 0;
    output2.textContent = 0;
    output3.textContent = 0;
  
}
/*const button = document.getElementById("button");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");

const min = 1;
const max = 6;

let randomnum1;
let randomnum2;
let randomnum3;


button.onclick = function(){
    randomnum1 = Math.floor(Math.random() * max) + min;
    randomnum2 = Math.floor(Math.random() * max) + min;
    randomnum3 = Math.floor(Math.random() * max) + min;

    output1.textContent = randomnum1;
    output2.textContent = randomnum2;
    output3.textContent = randomnum3;



}*/
