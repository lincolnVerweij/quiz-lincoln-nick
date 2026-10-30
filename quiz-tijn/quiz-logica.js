const questions = [
    "welke enemy is het grootst van deze 4?",
    "welke enemy heeft het minste health?",
    "welke enemy heeft het meeste health?",
    "welke boss/enemy heeft de meeste varianten?",
    "Hoeveel divine beasts zijn er?",
    "Hoeveel korok seeds zijn er?",
    "hoeveel shrines zijn er?",
    "wat krijg je als je alle korok seeds vindt?",
    "hoeveel genaamde locaties zijn er?",
    "wat telt niet mee aan de 100% benodigheden?",
    "Van wie is het paard Epona?",
    "Van wie is het koningklijke witte paard?",
    "welk insect bestaat niet?",
    "welk dier bestaat niet?",
    "welk dier heeft het meest HP/Health?",
    "Wat is het grootste Dorp/Village in Hyrule?",
    "Wat is het kleinste Dorp/Village in Hyrule?",
    "Hoe heet de plek waar je het spel begint?",
    "Hoe heet de volkaan in Hyrule?",
    "Welk gebied heeft de hoogste temperatuur?"
];

const possibleAnswers = [
    ["een bokoblin", "een keese", "een moblin", "een lizalfos"],
    ["een keese", "een bokoblin", "een guardian", "master Kohga"],
    ["een gold lynel", "Calamity Ganon", "guardian scout++", "master Kohga"],
    ["Talus", "Chuchus", "Keese", "Lizalfos"],
    ["3", "1", "4", "2"],
    ["900", "500", "1000", "350"],
    ["120", "150", "130", "100"],
    ["Rupees", "Master Sword", "Champion's Tunic", "een drol"],
    ["206", "260", "226", "250"],
    ["Korok seeds", "Quests", "Shrines", "Sheikah towers"],
    ["Bert", "Zelda", "King Rhoam", "Link"],
    ["King Rhoam", "Zelda", "Sidon", "Daruk"],
    ["Cricket", "Beetle", "Spider", "Firefly"],
    ["Varken", "Schaap", "Koe", "Zwijn"],
    ["Giant Horse", "Honeyvore Bear", "Grizzlemaw Bear", "Great-horned Rhinoceros"],
    ["Rito village", "Hateno village", "Gerudo village", "Zora's Domain"],
    ["Tarrey Town", "Goron city", "Kakariko village", "Rito village"],
    ["Temple of time", "Shrine of Resurrection", "Korok forest", "Hyrule castle"],
    ["Death volcano", "Death hill", "Daruk's mountain", "Death mountain"],
    ["Hebra", "Gerudo desert", "Gerudo highlands", "Eldin"]
];

const correctAnswer = [
    "C", "A", "B", "D", "C", "A", "A", "D", "C", "B", "D", "B", "C", "A", "C", "B", "A", "B", "D", "D"
];

const questionElement = document.querySelector("#question");
const feedbackElement = document.querySelector("#feedback");
const buttonAElement = document.querySelector("#btn-A");
const buttonBElement = document.querySelector("#btn-B");
const buttonCElement = document.querySelector("#btn-C");
const buttonDElement = document.querySelector("#btn-D");
const startBtn = document.querySelector(".btn");
const backHomeBtn = document.querySelector(".backHomeBtn");

let currentQuestion = 0;
let score = 0;

if (startBtn) {
    startBtn.addEventListener("click", function () {
        window.location.href = "quiz-vragen.html";
    });
}

if (backHomeBtn) {
    backHomeBtn.addEventListener("click", function () {
        window.location.href = "/index.html";
    });
}

function checkAnswer(input) {
    const answer = correctAnswer[currentQuestion];

    if (input === answer) {
        feedbackElement.textContent = "Correct!";
        score++;
    } else {
        feedbackElement.textContent = "Fout!";
    }

    setTimeout(() => {
        currentQuestion++;
        loadQuestion();
    }, 1000);
}

function loadQuestion() {
    if (!questionElement) return;

    if (currentQuestion >= questions.length) {
        questionElement.textContent = "Quiz Afgerond!";
        feedbackElement.textContent = "Je eindscore is " + score + " van de " + questions.length + " punten!";
        if (buttonAElement) buttonAElement.parentElement.style.display = "none";
        return;
    }

    feedbackElement.textContent = "";
    const question = questions[currentQuestion];
    const answers = possibleAnswers[currentQuestion];

    questionElement.textContent = (currentQuestion + 1) + ". " + question;
    buttonAElement.textContent = answers[0];
    buttonBElement.textContent = answers[1];
    buttonCElement.textContent = answers[2];
    buttonDElement.textContent = answers[3];
}

if (questionElement) {
    loadQuestion();
}

console.log("JS Gekoppeld");

const cat1 = document.querySelector(".cat-button1");
const cat2 = document.querySelector(".cat-button2");
const cat3 = document.querySelector(".cat-button3");
const cat4 = document.querySelector(".cat-button4");

cat1.addEventListener("click", function(){
    window.location.href = "/quiz-tijn/quiz-vragen.html?cat=1";
});

cat2.addEventListener("click", function(){
    window.location.href = "/quiz-tijn/quiz-vragen.html?cat=2";
});

cat3.addEventListener("click", function(){
    window.location.href = "/quiz-tijn/quiz-vragen.html?cat=3";
});

cat4.addEventListener("click", function(){
    window.location.href = "/quiz-tijn/quiz-vragen.html?cat=4";
});