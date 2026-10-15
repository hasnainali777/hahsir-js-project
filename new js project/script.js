
function calculateResult() {
  let m = parseFloat(document.getElementById('maths').value) || 0;
  let e = parseFloat(document.getElementById('english').value) || 0;
  let p = parseFloat(document.getElementById('physics').value) || 0;
  let c = parseFloat(document.getElementById('chemistry').value) || 0;

  let total = m + e + p + c;
  let percentage = (total / 400) * 100;

  let grade = "";
  if (percentage >= 90) grade = "A+";
  else if (percentage >= 80) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else if (percentage >= 50) grade = "D";
  else grade = "F";

  let resultDiv = document.getElementById('result');
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
    Total: ${total}/400 <br>
    Percentage: ${percentage.toFixed(2)}% <br>
    Grade: ${grade}
  `;
}

