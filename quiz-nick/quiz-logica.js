console.log("hetwerkt?");

let coreHome = document.querySelector(".coreHome");

let sigMoves = document.querySelector(".cat-button3");
let sigAbility = document.querySelector(".cat-button4");






/*categorie 1*/

let coreWITP = document.querySelector(".core-WITP");
let WITPbutton = document.querySelector(".cat-button1");

let startButtonWITP = document.querySelector("#startButWITP");
let vragenWITP = document.querySelector(".vragenWITP-v1");
let nextQWITP = document.querySelector(".nextQ");

let questionWITP = document.querySelector("#qWITP");
let butAWITP = document.querySelector("#AnsWITPa");
let butBWITP = document.querySelector("#AnsWITPb");
let butCWITP = document.querySelector("#AnsWITPc");
let butDWITP = document.querySelector("#AnsWITPd");

let feedBack = document.querySelector("#feedbackWITP");
let scoreDisplayWITP = document.querySelector("#scoreDisplayWITP");
let qCounterWITP = document.querySelector("#qCounterWITP")


WITPbutton.addEventListener("click", function() {
    coreWITP.classList.remove("notshow")
    coreHome.classList.add("notshow")
})

startButtonWITP.addEventListener("click", function() {
    vragenWITP.classList.remove("notshow")
    startButtonWITP.classList.add("notshow")
    nextQWITP.classList.remove("notshow")
    loadQuestionWITP()
})

nextQWITP.addEventListener("click", function() {

    feedBack.textContent = ""
    loadQuestionWITP()

})

/*vragen-WITP*/







const questionsAsObjectsWITP = [
    {
        afbeelding: "",
        question: "Who is that pokemon?",
        answers: ["azumarill", "charizard", "pikachu", "greninja"],
        answer: "pikachu"
    },
    {
        afbeelding: "",
        question: "Who is that pokemon?",
        answers: ["gengar", "groudon", "pidgey", "snorlax"],
        answer: "snorlax"
    },
    {
        afbeelding: "",
        question: "test",
        answers: ["1", "2", "3", "4"],
        answer: "3"
    },
    {
        afbeelding: "",
        question: "test2",
        answers: ["1", "2", "3", "4"],
        answer: "4"
    },
    {
        afbeelding: "",
        question: "test3",
        answers: ["1", "2", "3", "4"],
        answer: "1"
    },
]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}


let shuffledQuestionsWITP = shuffleArray([...questionsAsObjectsWITP]);

let currentQuestionWITP = -1;
let scoreWITP = 0;


function loadQuestionWITP() {

    currentQuestionWITP++;

    if (currentQuestionWITP >= shuffledQuestionsWITP.length) {

        questionWITP.textContent = "Categorie voltooid!";
        nextQWITP.classList.add("notshow");
        vragenWITP.classList.add("notshow");
        feedBack.classList.add("notshow");

    }
    else {
        

    let currentQuestionWITPs = shuffledQuestionsWITP[currentQuestionWITP]

        questionWITP.textContent = currentQuestionWITPs.question

        butAWITP.textContent = currentQuestionWITPs.answers[0];
        butBWITP.textContent = currentQuestionWITPs.answers[1];
        butCWITP.textContent = currentQuestionWITPs.answers[2];
        butDWITP.textContent = currentQuestionWITPs.answers[3];
    }
}



function checkAnswerWITP(input) {

    let currentQuestionWITPs = shuffledQuestionsWITP[currentQuestionWITP]

    const answerWITP = currentQuestionWITPs.answer;

    if (input === answerWITP) {
        feedBack.textContent = "Correct! Druk op volgende vraag!";
        scoreWITP = scoreWITP + 25
        scoreDisplayWITP.textContent = "Score: " + scoreWITP;
    } 
    else {
        feedBack.textContent = "Fout!";
        scoreWITP = scoreWITP - 25
        scoreDisplayWITP.textContent = "Score: " + scoreWITP;
    }
}

butAWITP.addEventListener("click", function(){
    checkAnswerWITP(butAWITP.textContent)
})

butBWITP.addEventListener("click", function(){
    checkAnswerWITP(butBWITP.textContent)
})

butCWITP.addEventListener("click", function(){
    checkAnswerWITP(butCWITP.textContent)
})

butDWITP.addEventListener("click", function(){
    checkAnswerWITP(butDWITP.textContent)
})


/*vragen-WITP*/

/*categorie 1*/


/*categorie 2*/

let coreWPE = document.querySelector(".core-WPE");
let WPEbutton = document.querySelector(".cat-button2");

WPEbutton.addEventListener("click", function() {
    coreWPE.classList.remove("notshow")
    coreHome.classList.add("notshow")
})



/*einde categorie 2*/

/*voorbeeld objects*/




console.log(questionsAsObjectsWITP[0].question)
/*voorbeeld objects*/