// Function to calculate average
function calculateAverage(marks) {
  let sum = 0;
  for (let mark of marks) {
    sum += mark;
  }
  return sum / marks.length;
}

// Function to assign grade based on average
function getGrade(avg) {
  if (avg >= 90) return 'A';
  if (avg >= 75) return 'B';
  if (avg >= 50) return 'C';
  return 'F';
}

// Event listener for button click
document.getElementById('calculateBtn').addEventListener('click', () => {
  const marks = [
    Number(document.getElementById('mark1').value),
    Number(document.getElementById('mark2').value),
    Number(document.getElementById('mark3').value),
    Number(document.getElementById('mark4').value),
    Number(document.getElementById('mark5').value)
  ];

  // Validate input
  if (marks.some(mark => isNaN(mark) || mark < 0 || mark > 100)) {
    document.getElementById('result').textContent = "Please enter valid marks (0-100).";
    return;
  }

  const avg = calculateAverage(marks);
  const grade = getGrade(avg);

  document.getElementById('result').textContent = `Average: ${avg.toFixed(2)} - Grade: ${grade}`;
});


document.getElementById('resetBtn').addEventListener('click', () => {
  // Clear all input fields
  for (let i = 1; i <= 5; i++) {
    document.getElementById('mark' + i).value = '';
  }
  // Clear result text
  document.getElementById('result').textContent = '';
});




