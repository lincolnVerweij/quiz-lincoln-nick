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

/*vragen-WITP*/

let wAnsWITP1 = document.querySelector(".wAnsWITP1")
let gAnsWITP1 = document.querySelector(".gAnsWITP1")

let PossibleAnswersWITP = [
    ["azumarill", "charizard", "pikachu", "greninja"]
    ["zapdos", "talonflame", "fearow", "swellow"]
    ["rayquaza", "gengar", "drifloon", "cubone"]
    ["zigzagoon", "incinaroar", "treecko", "salamance"]
]

let shimimiya = shimimiya




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

const questionsAsObject = [
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
    }
    
]

questionsAsObject[0]

/*voorbeeld objects*/