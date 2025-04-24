const TextboxInput = document.getElementById("userInput");
const FahrenheitToCelcius = document.getElementById("toCelcius");
const CelciusToFahrenheit = document.getElementById("toFahrenheit");
const ConvertedTemp = document.getElementById("FinalConverted");

function convert(event) {
    event.preventDefault(); // Prevent form from refreshing

    let inputTemp = parseFloat(TextboxInput.value); // Get user input and convert to number

    if (isNaN(inputTemp)) {
        ConvertedTemp.textContent = "Please enter a valid number!";
        return;
    }

    let result;

    if (FahrenheitToCelcius.checked) {
        result = (inputTemp - 32) * 5 / 9;
        ConvertedTemp.textContent = `${inputTemp}°F is ${result.toFixed(2)}°C`;
    } else if (CelciusToFahrenheit.checked) {
        result = (inputTemp * 9 / 5) + 32;
        ConvertedTemp.textContent = `${inputTemp}°C is ${result.toFixed(2)}°F`;
    } else {
        ConvertedTemp.textContent = "Please select a conversion option!";
    }
}

// Reset function
function resetForm() {
    TextboxInput.value = "";
    FahrenheitToCelcius.checked = false;
    CelciusToFahrenheit.checked = false;
    ConvertedTemp.textContent = "";
}
