document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("marksForm");
  const resultDiv = document.getElementById("result");
  const resetButton = document.getElementById("resetButton");

  function clearInputs() {
    form.reset();
    resultDiv.innerHTML = "";
  }

  clearInputs();

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let marks = [];
    let isValid = true;

    for (let i = 1; i <= 4; i++) {
      let mark = document.getElementById(`unit${i}`).value.trim();
      if (isNaN(mark) || mark === "" || mark < 0 || mark > 73) {
        isValid = false;
        break;
      }
      marks.push(parseInt(mark));
    }

    if (!isValid) {
      resultDiv.innerHTML = '<p style="color: red;">Invalid input! Please enter numbers between 0 and 73.</p>';
      return;
    }

    let total = marks.reduce((acc, curr) => acc + curr, 0);
    let average = total / marks.length;
    let grade;

    // Else-If Statements
    if (average <= 39) { grade = "E"; }
    else if (average <= 43) { grade = "D-"; }
    else if (average <= 46) { grade = "D"; }
    else if (average <= 49) { grade = "D+"; }
    else if (average <= 53) { grade = "C-"; }
    else if (average <= 56) { grade = "C"; }
    else if (average <= 59) { grade = "C+"; }
    else if (average <= 63) { grade = "B-"; }
    else if (average <= 66) { grade = "B"; }
    else if (average <= 69) { grade = "B+"; }
    else if (average <= 73) { grade = "A-"; }
    else { grade = "Invalid marks range!"; }

    resultDiv.innerHTML = `<p>Total Marks: ${total}</p><p>Average Marks: ${average.toFixed(2)}</p><p>Grade: ${grade}</p>`;
  });

  resetButton.addEventListener("click", clearInputs);
});

/* ---------------------------------
   Alternative: Using Switch Statements
------------------------------------ */

/*document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("marksForm");
  const resultDiv = document.getElementById("result");
  const resetButton = document.getElementById("resetButton");

  function clearInputs() {
    form.reset();
    resultDiv.innerHTML = "";
  }

  clearInputs();

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let marks = [];
    let isValid = true;

    for (let i = 1; i <= 4; i++) {
      let mark = document.getElementById(`unit${i}`).value.trim();
      if (isNaN(mark) || mark === "" || mark < 0 || mark > 73) {
        isValid = false;
        break;
      }
      marks.push(parseInt(mark));
    }

    if (!isValid) {
      resultDiv.innerHTML = '<p style="color: red;">Invalid input! Please enter numbers between 0 and 73.</p>';
      return;
    }

    let total = marks.reduce((acc, curr) => acc + curr, 0);
    let average = total / marks.length;
    let grade;

    // Switch Case
    switch (true) {
      case (average <= 39): grade = "E"; break;
      case (average <= 43): grade = "D-"; break;
      case (average <= 46): grade = "D"; break;
      case (average <= 49): grade = "D+"; break;
      case (average <= 53): grade = "C-"; break;
      case (average <= 56): grade = "C"; break;
      case (average <= 59): grade = "C+"; break;
      case (average <= 63): grade = "B-"; break;
      case (average <= 66): grade = "B"; break;
      case (average <= 69): grade = "B+"; break;
      case (average <= 73): grade = "A-"; break;
      default: grade = "Invalid marks range!";
    }

    resultDiv.innerHTML = `<p>Total Marks: ${total}</p><p>Average Marks: ${average.toFixed(2)}</p><p>Grade: ${grade}</p>`;
  });

  resetButton.addEventListener("click", clearInputs);
});*/



