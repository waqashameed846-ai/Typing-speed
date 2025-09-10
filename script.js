// Quotes for typing test
const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing fast is a useful skill to have.",
  "Practice makes perfect in everything you do.",
  "JavaScript makes websites more interactive.",
  "Coding every day will improve your skills."
];

const quoteElement = document.getElementById("quote");
const inputElement = document.getElementById("input");
const wpmElement = document.getElementById("Wpm");
const accuracyElement = document.getElementById("accuracy");
const timeElement = document.getElementById("time");
const resetButton = document.querySelector(".reset");

let startTime, interval;
let currentQuote = "";
let time = 0;

// Load random quote
function loadQuote() {
  currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.textContent = currentQuote;
  inputElement.value = "";
  wpmElement.textContent = 0;
  accuracyElement.textContent = 0;
  timeElement.textContent = 0;
  clearInterval(interval);
  time = 0;
}

// Start timer
function startTimer() {
  startTime = new Date();
  interval = setInterval(() => {
    time++;
    timeElement.textContent = time;
  }, 1000);
}

// Calculate results
function calculateResults() {
  const input = inputElement.value.trim();
  const wordsTyped = input.split(/\s+/).filter(Boolean).length;
  const wpm = Math.round((wordsTyped / time) * 60) || 0;

  // Accuracy
  let correctChars = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === currentQuote[i]) {
      correctChars++;
    }
  }
  const accuracy = Math.round((correctChars / currentQuote.length) * 100);

  wpmElement.textContent = wpm;
  accuracyElement.textContent = accuracy;
}

// Event listener for typing
inputElement.addEventListener("input", () => {
  if (time === 0) {
    startTimer();
  }
  calculateResults();
});

// Reset button
resetButton.addEventListener("click", loadQuote);

// Initialize
loadQuote();
