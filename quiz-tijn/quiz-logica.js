console.log("JS Gekoppeld");
const questions = [
    "welke enemy is dit?", // 0
    "welke enemy heeft het minste health?", // 1

]

const possibleAnswers = [
    ["een bokoblin", "een keese", "een moblin", "een lizalfos"], // 0
]

const correctAnswer = [
    "C",
]

const questionElement = document.querySelector("#question");
const feedbackElement = document.querySelector("#feedback");
const buttonAElement = document.querySelector("#button-a");
const buttonBElement = document.querySelector("#button-B");
const buttonCElement = document.querySelector("#button-C");
const buttonDElement = document.querySelector("#button-D");

let currentQuestion = 0;
let score = 0;

/*
input is A B C of D"
*/

function checkAnswer(input) {
    const answer = correctAnswer[currentQuestion]; // A, B, C, D

    if (input === answer) {
        feedbackElement.textContent = "Correct!";
        score++;
    } else {
        feedbackElement.textContent = "Fout!";
    }
}

function loadQuestion() {

    if (currentQuestion >= questions.length) {
        alert("Dat was de quiz! Je hebt " + score + " punten.");
        return;
    }
    const question = questions[currentQuestion];
    const answers = possibleAnswers[currentQuestion];

    questionElement.textContent = question;
    buttonAElement.textContent = answers[0];
    buttonBElement.textContent = answers[1];
    buttonCElement.textContent = answers[2];
    buttonDElement.textContent = answers[3];
}
