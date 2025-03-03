const pi = 3.14159;

// Switch between tabs
function openTab(tabName) {
    let contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
}

// Automatically Calculate Area & Circumference on Radius Input
function calculateCircle() {
    let radius = document.getElementById("radius").value.trim();
    let areaResult = document.getElementById("areaResult");
    let circumferenceResult = document.getElementById("circumferenceResult");

    if (radius === "" || radius < 0) {
        areaResult.style.color = "red";
        circumferenceResult.style.color = "red";
        areaResult.textContent = "Invalid! Enter a positive number.";
        circumferenceResult.textContent = "Invalid! Enter a positive number.";
    } else {
        let area = pi * Math.pow(parseFloat(radius), 2);
        let circumference = 2 * pi * parseFloat(radius);
        areaResult.style.color = "white";
        circumferenceResult.style.color = "white";
        areaResult.textContent = `Area: ${area.toFixed(2)} cm²`;
        circumferenceResult.textContent = `Circumference: ${circumference.toFixed(2)} cm`;
    }
}

// Calculate Perimeter
function calculatePerimeter() {
    let length = document.getElementById("perimeterLength").value.trim();
    let width = document.getElementById("perimeterWidth").value.trim();
    let resultText = document.getElementById("perimeterResult");

    if (length === "" || width === "" || length < 0 || width < 0) {
        resultText.style.color = "red";
        resultText.textContent = "Invalid! Enter positive numbers.";
    } else {
        let perimeter = 2 * (parseFloat(length) + parseFloat(width));
        resultText.style.color = "white";
        resultText.textContent = `Perimeter: ${perimeter.toFixed(2)} cm`;
    }
}

// Calculate Volume
function calculateVolume() {
    let radius = document.getElementById("volumeRadius").value.trim();
    let height = document.getElementById("volumeHeight").value.trim();
    let resultText = document.getElementById("volumeResult");

    if (radius === "" || height === "" || radius < 0 || height < 0) {
        resultText.style.color = "red";
        resultText.textContent = "Invalid! Enter positive numbers.";
    } else {
        let volume = pi * Math.pow(parseFloat(radius), 2) * parseFloat(height);
        resultText.style.color = "white";
        resultText.textContent = `Volume: ${volume.toFixed(2)} cm³`;
    }
}

// Reset Functions
function resetCircle() {
    document.getElementById("radius").value = "";
    document.getElementById("areaResult").textContent = "Area will be displayed here.";
    document.getElementById("circumferenceResult").textContent = "Circumference will be displayed here.";
}

function resetPerimeter() {
    document.getElementById("perimeterLength").value = "";
    document.getElementById("perimeterWidth").value = "";
    document.getElementById("perimeterResult").textContent = "Perimeter will be displayed here.";
}

function resetVolume() {
    document.getElementById("volumeRadius").value = "";
    document.getElementById("volumeHeight").value = "";
    document.getElementById("volumeResult").textContent = "Volume will be displayed here.";
}

// Open the first tab by default
openTab('circleCalculations');
