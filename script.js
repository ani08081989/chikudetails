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


function fetchQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const quote = data.content;
            const author = data.author;
            const quoteContainer = document.getElementById('new-quote-container');
            quoteContainer.innerHTML = `<p>"${quote}"</p><p>- ${author}</p>`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            const quoteContainer = document.getElementById('new-quote-container');
            quoteContainer.innerHTML = '<p>Failed to fetch quote. Please try again later.</p>';
        });
}

document.addEventListener('DOMContentLoaded', fetchQuote);