// script.js
const correctAnswer = "stranger things"; // Replace with the actual answer

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById("correct").innerHTML = '<h1>Congratulations! You solved the riddle. Clue: WATER FILTER</h1>';
        
    } else {
        document.getElementById("correct").innerHTML = '<h1>Oops.Try again</h1>';
    }
}