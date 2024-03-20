// Get references to the HTML elements
const tapButton = document.getElementById('tapButton');
const resetButton = document.getElementById('resetButton');
const countDisplay = document.getElementById('count');

// Initialize count variable
let count = 0;

// Function to increment count when Tap button is clicked
tapButton.addEventListener('click', function () {
    count++;
    updateCountDisplay();
});

// Function to reset count when Reset button is clicked
resetButton.addEventListener('click', function () {
    count = 0;
    updateCountDisplay();
});

// Function to update count display in the HTML
function updateCountDisplay() {
    countDisplay.textContent = count;
}