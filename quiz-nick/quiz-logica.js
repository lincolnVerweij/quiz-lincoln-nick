console.log("hetwerkt?")


let sigMoves = document.querySelector(".cat-button3")
let sigAbility = document.querySelector(".cat-button4")
let coreHome = document.querySelector(".coreHome")





/*categorie 1*/

let coreWITP = document.querySelector(".core-WITP")
let WITPbutton = document.querySelector(".cat-button1");

WITPbutton.addEventListener("click", function() {
    coreWITP.classList.remove("notshow")
    coreHome.classList.add("notshow")
})

let currentQuestionWITP = 0;
let scoreWITP = 0;

let startbuttonWITP = document.querySelector("#startButWITP")

startbuttonWITP.addEventListener("click", function() {
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
        questions: "",
        answers: ["", "", "", ""],
        answer: ""
    },
    {
        afbeelding: "",
        question: "",
        answers: ["", "", "", ""],
        answer: ""
    },
    {
        afbeelding: "",
        questions: "",
        answers: ["", "", "", ""],
        answer: ""
    },
    {
        afbeelding: "",
        questions: "",
        answers: ["", "", "", ""],
        answer: ""
    },
]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}





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