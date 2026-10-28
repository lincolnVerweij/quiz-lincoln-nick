console.log("JS Gekoppeld");
const questions = [
    "welke enemy is het grootst van deze 4?", // 0
    "welke enemy heeft het minste health?", // 1"
    "welke enemy heeft het meeste health?", // 2"
    "welke boss/enemy heeft de meeste varianten?", // 3"
    "Hoeveel divine beasts zijn er?", // 4"
    "Hoeveel korok seeds zijn er?", // 5"
    "hoeveel shrines zijn er?", // 6"
    "wat krijg je als je alle korok seeds vindt?", // 7"
    "hoeveel genaamde locaties zijn er?", // 8"
    "wat telt niet mee aan de 100% benodigheden?", // 9"
    "Van wie is het paard Epona?", // 10"
    "Van wie is het koningklijke witte paard?",  // 11"
    "welk insect bestaat niet?", // 12"
    "welk dier bestaat niet?", // 13"
    "welk dier heeft het meest HP/Health?", // 14"
    "Wat is het grootste Dorp/Village in Hyrule?", // 15"
    "Wat is het kleinste Dorp/Village in Hyrule?", // 16"
    "Hoe heet de plek waar je het spel begint?", // 17"
    "Hoe heet de volkaan in Hyrule?", // 18"
    "Welk gebied heeft de hoogste temperatuur?", // 19"

    

]

const possibleAnswers = [
    ["een bokoblin", "een keese", "een moblin", "een lizalfos"], // 0
    ["een keese", "een bokoblin", "een guardian", "master Kohga"], // 1
    ["een gold lynel", "Calimity Ganon", "guardian scout++", "master Kohga"], // 2
    ["Talus", "Chuchus", "Keese", "Lizalfos"], // 3
    ["3", "1", "4", "2"], // 4
    ["900", "500", "1000", "350"], // 5
    ["120", "150", "130", "100"], // 6
    ["Rupees", "Master Sword", "Champion's Tunic", "een drol"], // 7
    ["206", "260", "226", "250"], // 8
    ["Korok seeds", "quests", "shrines", "Sheikah towers"], // 9
    ["Bert", "Zelda", "King Rhoam", "Link"], // 10
    ["King Rhoam", "Zelda", "Sidon", "Daruk"], // 11
    ["Cricket", "beetle", "Spider", "Firefly"], // 12
    ["Varken", "Schaap", "Koe", "Zwijn"], // 13
    ["giant horse", "honeyvore Bear", "Grizzlemaw Bear", "Great-horned Rhineceros"], // 14
    ["Rito village", "Hateno village", "Gerudo village", "Zora's Domain"], // 15
    ["Tarrey Town", "Goron city", "Kakariko village", "Rito village"], // 16
    ["Temple of time", "Shrine of resurrection", "Korok forest", "Hyrule castle"], // 17
    ["Death volcano", "Death hill", "Daruk's mountain", "Death mountain"], // 18
    ["Hebra", "Gerudo desert", "Gerudo highlands", "Eldin"], // 19

]

const correctAnswer = [
    "C", "A", "B", "D", "C", "A", "A", "D", "C", "B", "D", "B", "C", "A", "C", "B", "B", "B", "D", "D"
]


const questionElement = document.querySelector("#question");
const feedbackElement = document.querySelector("#feedback");
const buttonAElement = document.querySelector("#btn-A");
const buttonBElement = document.querySelector("#btn-B");
const buttonCElement = document.querySelector("#btn-C");
const buttonDElement = document.querySelector("#btn-D");

let currentQuestion = 0;
let score = 0;

/*
input is A B C of D"
*/

button.addEventListener("click", function () {
    titel.style.color = "green"
});

function checkAnswer(input) {
    const answer = correctAnswer[currentQuestion]; // A, B, C, D

    if (input === answer) {
        feedbackElement.textContent = "Correct!";
        score++;
    } else {
        feedbackElement.textContent = "Fout! Het was antwoord " + answer;
    }

    currentQuestion++;
    loadQuestion();
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

loadQuestion();