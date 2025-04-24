const GuessInput = document.getElementById("guess");
const Result = document.getElementById("result");
const Submit = document.getElementById("submit");
const GuessForm = document.getElementById("guessForm");

const minNum = 40;
const maxNum = 90;

let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;

// Ensure input field is enabled when the page loads
window.onload = function () {
    GuessInput.disabled = false;
};

GuessForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form refresh

    let userGuess = parseInt(GuessInput.value, 10);

    if (isNaN(userGuess) || userGuess < minNum || userGuess > maxNum) {
        Result.textContent = `⚠️ Enter a valid number between ${minNum} and ${maxNum}.`;
        return;
    }

    attempts++;

    if (userGuess < answer) {
        Result.innerHTML = `<span style="color:red;">⬇ Too low! Try again. Attempts: ${attempts}</span>`;
    } else if (userGuess > answer) {
        Result.innerHTML = `<span style="color:red;">⬆ Too high! Try again. Attempts: ${attempts}</span>`;
    } else {
        Result.innerHTML = `<span style="color:green;">🎉 Correct! You guessed it in ${attempts} attempts.</span>`;
        Submit.disabled = true;

        // Add a reset button
        const resetBtn = document.createElement("button");
        resetBtn.textContent = "Play Again";
        resetBtn.style.marginLeft = "10px";
        resetBtn.onclick = function () {
            answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
            attempts = 0;
            Result.textContent = "";
            Submit.disabled = false;
            GuessInput.value = "";
            GuessInput.disabled = false; // Re-enable input on reset
        };

        Result.appendChild(resetBtn);
    }
});
