console.log("hetwerkt?");

let coreHome = document.querySelector(".coreHome");

let welcomeMsg = document.querySelector("#welcomeMsg");
let name = prompt("Wat is jou naam?");


welcomeMsg.textContent = "Welkom " + name + " bij de pokemon quiz!";



/*categorie 1*/

let coreWITP = document.querySelector(".core-WITP");
let WITPbutton = document.querySelector(".cat-button1");

let startButtonWITP = document.querySelector("#startButWITP");
let questionsWITPv1 = document.querySelector(".questionsWITPv1");
let nextQWITP = document.querySelector(".nextQWITP");

let questionWITP = document.querySelector("#qWITP");
let butAWITP = document.querySelector("#AnsWITPa");
let butBWITP = document.querySelector("#AnsWITPb");
let butCWITP = document.querySelector("#AnsWITPc");
let butDWITP = document.querySelector("#AnsWITPd");
let returnButWITP = document.querySelector(".returnButWITP");

let feedBack = document.querySelector("#feedbackWITP");
let scoreDisplayWITP = document.querySelector("#scoreDisplayWITP");
let qCounterWITP = document.querySelector("#qCounterWITP");
let totalScoreDisplay = document.querySelector("#totalScoreDisplay");

let pokemonImgWITP = document.querySelector("#pokemonImgWITP");

let totalScore = 0;

totalScoreDisplay.textContent = "score: " + totalScore;

function updateTotalScore() {
    totalScore = scoreWITP + scoreWPE + scorePSA + scorePSM;
    totalScoreDisplay.textContent = "Totale score: " + totalScore;

}

WITPbutton.addEventListener("click", function() {
    coreWITP.classList.remove("notshow")
    coreHome.classList.add("notshow")
    
})

startButtonWITP.addEventListener("click", function() {
    questionsWITPv1.classList.remove("notshow")
    startButtonWITP.classList.add("notshow")
    nextQWITP.classList.remove("notshow")
    pokemonImgWITP.classList.remove("notshow")
    loadQuestionWITP()
})

nextQWITP.addEventListener("click", function() {

    feedBack.textContent = ""
    loadQuestionWITP()

})

returnButWITP.addEventListener("click", function() {

    coreHome.classList.remove("notshow");
    coreWITP.classList.add("notshow");
    WITPbutton.style.backgroundColor = "green";
    WITPbutton.style.color = "white"
})


const questionsAsObjectsWITP = [
    {
        image: "Images/pikachu_silhouette_transparent.png",
        reveal: "Images/Pikachu.reveal.jpg",
        question: "Who is that pokemon?",
        answers: ["azumarill", "charizard", "pikachu", "greninja"],
        answer: "pikachu"
    },
    {
        image: "Images/snorlax_silhouette_transparent.png",
        reveal: "Images/640px-0143Snorlax.png",
        question: "Who is that pokemon?",
        answers: ["gengar", "groudon", "pidgey", "snorlax"],
        answer: "snorlax"
    },
    {
        image: "Images/piplup_silhouette_transparent.png",
        reveal: "Images/393.png",
        question: "Who is that pokemon?",
        answers: ["piplup", "scraggy", "gible", "drifloon"],
        answer: "piplup"
    },
    {
        image: "Images/marshadow.sil.png",
        reveal: "Images/marshadow.image.png",
        question: "Who is that pokemon?",
        answers: ["entei", "rayquaza", "marshadow", "celebi"],
        answer: "marshadow"
    },
    {
        image: "Images/pyroar.sil.png",
        reveal: "Images/pyroar.image.png",
        question: "Who is that pokemon?",
        answers: ["meowth", "skitty", "pyroar", "furfrou"],
        answer: "pyroar"
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
    qCounterWITP.textContent = "vraag: " + (currentQuestionWITP + 1);

    if (currentQuestionWITP >= shuffledQuestionsWITP.length) {

        questionWITP.textContent = "Categorie voltooid!";
        nextQWITP.classList.add("notshow");
        questionsWITPv1.classList.add("notshow");
        feedBack.classList.add("notshow");
        returnButWITP.classList.remove("notshow");
        qCounterWITP.classList.add("notshow");
        pokemonImgWITP.classList.add("notshow");

    }
    else {
        
    

    let currentQuestionWITPs = shuffledQuestionsWITP[currentQuestionWITP]

        questionWITP.textContent = currentQuestionWITPs.question

        pokemonImgWITP.src = currentQuestionWITPs.image;

        butAWITP.textContent = currentQuestionWITPs.answers[0];
        butBWITP.textContent = currentQuestionWITPs.answers[1];
        butCWITP.textContent = currentQuestionWITPs.answers[2];
        butDWITP.textContent = currentQuestionWITPs.answers[3];

        questionsWITPv1.classList.remove("notshow");
        
    }
}



function checkAnswerWITP(input) {

    let currentQuestionWITPs = shuffledQuestionsWITP[currentQuestionWITP]

    const answerWITP = currentQuestionWITPs.answer;

    if (input === answerWITP) {
        feedBack.textContent = "Correct! Druk op volgende vraag!";
        scoreWITP = scoreWITP + 25
        scoreDisplayWITP.textContent = "Score: " + scoreWITP;
        questionsWITPv1.classList.add("notshow");
        feedBack.style.color = "green"
        pokemonImgWITP.src = currentQuestionWITPs.reveal
        updateTotalScore();
    } 
    else {
        feedBack.textContent = "Fout!";
        if (scoreWITP === 0) {
            scoreWITP = scoreWITP - 0
            scoreDisplayWITP.textContent = "Score: " + scoreWITP;
            feedBack.style.color = "red"
        }
        else {
            scoreWITP = scoreWITP - 25
            scoreDisplayWITP.textContent = "Score: " + scoreWITP;
            feedBack.style.color = "red"
        }
        updateTotalScore();
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

let startButtonWPE = document.querySelector("#startButWPE");
let questionsWPE = document.querySelector(".questionsWPE");
let nextQWPE = document.querySelector(".nextQWPE");

let questionWPE = document.querySelector("#qWPE");
let butAWPE = document.querySelector("#AnsWPEa");
let butBWPE = document.querySelector("#AnsWPEb");
let butCWPE = document.querySelector("#AnsWPEc");
let butDWPE = document.querySelector("#AnsWPEd");
let returnButWPE = document.querySelector(".returnButWPE");

let feedBackWPE = document.querySelector("#feedbackWPE");
let scoreDisplayWPE = document.querySelector("#scoreDisplayWPE");
let qCounterWPE = document.querySelector("#qCounterWPE");


WPEbutton.addEventListener("click", function() {
    coreWPE.classList.remove("notshow");
    coreHome.classList.add("notshow");
});

startButtonWPE.addEventListener("click", function() {
    questionsWPE.classList.remove("notshow");
    startButtonWPE.classList.add("notshow");
    nextQWPE.classList.remove("notshow");
    loadQuestionWPE();
});

nextQWPE.addEventListener("click", function() {
    feedBackWPE.textContent = "";
    loadQuestionWPE();
});

returnButWPE.addEventListener("click", function() {
    coreHome.classList.remove("notshow");
    coreWPE.classList.add("notshow");

    WPEbutton.style.backgroundColor = "green";
    WPEbutton.style.color = "white";
});


const questionsAsObjectsWPE = [
    {
        question: "Should you feel yourself attacked by a sudden chill, it is evidence of an approaching _____. There is no escaping it. Give up.",
        answers: ["Gengar", "Haunter", "Mimikyu", "Duskull"],
        answer: "Gengar"
    },
    {
        question: "If a child it has made friends with is bullied, _____ will find the bully's house and burn it to the ground.",
        answers: ["Charizard", "Drampa", "Dragonite", "Salamence"],
        answer: "Drampa"
    },
    {
        question: "Its electric charges can reach even 100,000 volts. Careless contact can cause even an Indian elephant to faint.",
        answers: ["Electabuzz", "Jolteon", "Raichu", "Manectric"],
        answer: "Raichu"
    },
    {
        question: "Using its tail like a spring, it keeps its heart beating by bouncing constantly. If it stops, it dies.",
        answers: ["Bounsweet", "Spoink", "Hoppip", "Skiploom"],
        answer: "Spoink"
    },
    {
        question: "It is whispered that any child who mistakes _____ for a balloon and holds on to it could wind up missing.",
        answers: ["Drifloon", "Jigglypuff", "Clefairy", "Drifblim"],
        answer: "Drifloon"
    }
];


let shuffledQuestionsWPE = shuffleArray([...questionsAsObjectsWPE]);

let currentQuestionWPE = -1;
let scoreWPE = 0;


function loadQuestionWPE() {

    currentQuestionWPE++;

    qCounterWPE.textContent = "Vraag: " + (currentQuestionWPE + 1);

    if (currentQuestionWPE >= shuffledQuestionsWPE.length) {

        questionWPE.textContent = "Categorie voltooid!";
        nextQWPE.classList.add("notshow");
        questionsWPE.classList.add("notshow");
        feedBackWPE.classList.add("notshow");
        qCounterWPE.classList.add("notshow");
        returnButWPE.classList.remove("notshow");

    }
    else {

        let currentQuestionWPEs = shuffledQuestionsWPE[currentQuestionWPE];

        questionWPE.textContent = currentQuestionWPEs.question;

        butAWPE.textContent = currentQuestionWPEs.answers[0];
        butBWPE.textContent = currentQuestionWPEs.answers[1];
        butCWPE.textContent = currentQuestionWPEs.answers[2];
        butDWPE.textContent = currentQuestionWPEs.answers[3];

        questionsWPE.classList.remove("notshow");
    }
}


function checkAnswerWPE(input) {

    let currentQuestionWPEs = shuffledQuestionsWPE[currentQuestionWPE];

    const answerWPE = currentQuestionWPEs.answer;

    if (input === answerWPE) {

        feedBackWPE.textContent = "Correct! Druk op volgende vraag!";
        scoreWPE = scoreWPE + 25;
        scoreDisplayWPE.textContent = "Score: " + scoreWPE;

        questionsWPE.classList.add("notshow");
        feedBackWPE.style.color = "green";

        updateTotalScore();
    }
    else {

        feedBackWPE.textContent = "Fout! Probeer het opnieuw.";
        feedBackWPE.style.color = "red";

        if (scoreWPE === 0) {
            scoreWPE = scoreWPE - 0;
        }
        else {
            scoreWPE = scoreWPE - 25;
        }

        scoreDisplayWPE.textContent = "Score: " + scoreWPE;

        updateTotalScore();
    }
}


butAWPE.addEventListener("click", function() {
    checkAnswerWPE(butAWPE.textContent);
});

butBWPE.addEventListener("click", function() {
    checkAnswerWPE(butBWPE.textContent);
});

butCWPE.addEventListener("click", function() {
    checkAnswerWPE(butCWPE.textContent);
});

butDWPE.addEventListener("click", function() {
    checkAnswerWPE(butDWPE.textContent);
});

/*einde categorie 2*/

/*categorie 3*/

let corePSA = document.querySelector(".core-PSA");
let PSAbutton = document.querySelector(".cat-button3");

let startButtonPSA = document.querySelector("#startButPSA");
let questionsPSA = document.querySelector(".questionsPSA");
let nextQPSA = document.querySelector(".nextQPSA");

let questionPSA = document.querySelector("#qPSA");
let butAPSA = document.querySelector("#AnsPSAa");
let butBPSA = document.querySelector("#AnsPSAb");
let butCPSA = document.querySelector("#AnsPSAc");
let butDPSA = document.querySelector("#AnsPSAd");
let returnButPSA = document.querySelector(".returnButPSA");

let feedBackPSA = document.querySelector("#feedbackPSA");
let scoreDisplayPSA = document.querySelector("#scoreDisplayPSA");
let qCounterPSA = document.querySelector("#qCounterPSA");


PSAbutton.addEventListener("click", function() {
    corePSA.classList.remove("notshow");
    coreHome.classList.add("notshow");
});

startButtonPSA.addEventListener("click", function() {
    questionsPSA.classList.remove("notshow");
    startButtonPSA.classList.add("notshow");
    nextQPSA.classList.remove("notshow");
    loadQuestionPSA();
});

nextQPSA.addEventListener("click", function() {
    feedBackPSA.textContent = "";
    loadQuestionPSA();
});

returnButPSA.addEventListener("click", function() {
    coreHome.classList.remove("notshow");
    corePSA.classList.add("notshow");

    PSAbutton.style.backgroundColor = "green";
    PSAbutton.style.color = "white";
});


const questionsAsObjectsPSA = [
    {
        question: "Wat is de signature ability van de Machop evolutielijn?",
        answers: ["Steadfast", "Guts", "No Guard", "Inner Focus"],
        answer: "No Guard"
    },
    {
        question: "Welke Pokémon heeft de ability Tangling Hair?",
        answers: ["Alolan Dugtrio", "Alolan Sandslash", "Steelix", "Excadrill"],
        answer: "Alolan Dugtrio"
    },
    {
        question: "Welke Pokémon heeft de ability Quick Draw?",
        answers: ["Galarian Slowking", "Galarian Slowbro", "Slowking", "Slowbro"],
        answer: "Galarian Slowbro"
    },
    {
        question: "Wat is de signature ability van Primal Groudon?",
        answers: ["Drought", "Desolate Land", "Primordial Sea", "Delta Stream"],
        answer: "Desolate Land"
    },
    {
        question: "Bij welke Pokémon hoort de ability Huge Power?",
        answers: ["Azumarill", "Mawile", "Medicham", "Diggersby"],
        answer: "Azumarill"
    }
];


let shuffledQuestionsPSA = shuffleArray([...questionsAsObjectsPSA]);

let currentQuestionPSA = -1;
let scorePSA = 0;


function loadQuestionPSA() {

    currentQuestionPSA++;

    qCounterPSA.textContent = "Vraag: " + (currentQuestionPSA + 1);

    if (currentQuestionPSA >= shuffledQuestionsPSA.length) {

        questionPSA.textContent = "Categorie voltooid!";
        nextQPSA.classList.add("notshow");
        questionsPSA.classList.add("notshow");
        feedBackPSA.classList.add("notshow");
        qCounterPSA.classList.add("notshow");
        returnButPSA.classList.remove("notshow");

    }
    else {

        let currentQuestionPSAs = shuffledQuestionsPSA[currentQuestionPSA];

        questionPSA.textContent = currentQuestionPSAs.question;

        butAPSA.textContent = currentQuestionPSAs.answers[0];
        butBPSA.textContent = currentQuestionPSAs.answers[1];
        butCPSA.textContent = currentQuestionPSAs.answers[2];
        butDPSA.textContent = currentQuestionPSAs.answers[3];

        questionsPSA.classList.remove("notshow");
    }
}


function checkAnswerPSA(input) {

    let currentQuestionPSAs = shuffledQuestionsPSA[currentQuestionPSA];

    const answerPSA = currentQuestionPSAs.answer;

    if (input === answerPSA) {

        feedBackPSA.textContent = "Correct! Druk op volgende vraag!";
        scorePSA = scorePSA + 25;
        scoreDisplayPSA.textContent = "Score: " + scorePSA;

        questionsPSA.classList.add("notshow");
        feedBackPSA.style.color = "green";
        updateTotalScore();
    }
    else {

        feedBackPSA.textContent = "Fout! Probeer het opnieuw.";
        feedBackPSA.style.color = "red";

        if (scorePSA === 0) {
            scorePSA = scorePSA - 0;
        }
        else {
            scorePSA = scorePSA - 25;
        }

        scoreDisplayPSA.textContent = "Score: " + scorePSA;
        updateTotalScore();
    }
}


butAPSA.addEventListener("click", function() {
    checkAnswerPSA(butAPSA.textContent);
});

butBPSA.addEventListener("click", function() {
    checkAnswerPSA(butBPSA.textContent);
});

butCPSA.addEventListener("click", function() {
    checkAnswerPSA(butCPSA.textContent);
});

butDPSA.addEventListener("click", function() {
    checkAnswerPSA(butDPSA.textContent);
});

/*einde categorie 3*/

/*categorie 4*/

let corePSM = document.querySelector(".core-PSM");
let PSMbutton = document.querySelector(".cat-button4");

let startButtonPSM = document.querySelector("#startButPSM");
let questionsPSM = document.querySelector(".questionsPSM");
let nextQPSM = document.querySelector(".nextQPSM");

let questionPSM = document.querySelector("#qPSM");
let butAPSM = document.querySelector("#AnsPSMa");
let butBPSM = document.querySelector("#AnsPSMb");
let butCPSM = document.querySelector("#AnsPSMc");
let butDPSM = document.querySelector("#AnsPSMd");
let returnButPSM = document.querySelector(".returnButPSM");

let feedBackPSM = document.querySelector("#feedbackPSM");
let scoreDisplayPSM = document.querySelector("#scoreDisplayPSM");
let qCounterPSM = document.querySelector("#qCounterPSM");


PSMbutton.addEventListener("click", function() {
    corePSM.classList.remove("notshow");
    coreHome.classList.add("notshow");
});

startButtonPSM.addEventListener("click", function() {
    questionsPSM.classList.remove("notshow");
    startButtonPSM.classList.add("notshow");
    nextQPSM.classList.remove("notshow");
    loadQuestionPSM();
});

nextQPSM.addEventListener("click", function() {
    feedBackPSM.textContent = "";
    loadQuestionPSM();
});

returnButPSM.addEventListener("click", function() {
    coreHome.classList.remove("notshow");
    corePSM.classList.add("notshow");

    PSMbutton.style.backgroundColor = "green";
    PSMbutton.style.color = "white";
});


const questionsAsObjectsPSM = [
    {
        question: "Welke Pokémon heeft de signature move Darkest Lariat?",
        answers: ["Grimmsnarl", "Pangoro", "Malamar", "Incineroar"],
        answer: "Incineroar"
    },
    {
        question: "Welke signature move heeft de Pokémon Cinderace?",
        answers: ["Blaze Kick", "Pyro Ball", "Flame Charge", "Fire Blast"],
        answer: "Pyro Ball"
    },
    {
        question: "Wat is de signature move van de Pokémon Arceus?",
        answers: ["Divine Retribution", "Judgment", "Sacred Fire", "Judgment Beam"],
        answer: "Judgment"
    },
    {
        question: "Welke drie signature moves kan Pikachu leren?",
        answers: ["Zippy Zap, Splishy Splash en Floaty Fall", "Thunderbolt, Volt Tackle en Quick Attack", "Electro Ball, Thunder Wave en Discharge", "Iron Tail, Wild Charge en Agility"],
        answer: "Zippy Zap, Splishy Splash en Floaty Fall"
    },
    {
        question: "Welke Pokémon heeft de signature move Sketch?",
        answers: ["Porygon", "Ditto", "Smeargle", "Mew"],
        answer: "Smeargle"
    }
];


let shuffledQuestionsPSM = shuffleArray([...questionsAsObjectsPSM]);

let currentQuestionPSM = -1;
let scorePSM = 0;


function loadQuestionPSM() {

    currentQuestionPSM++;

    qCounterPSM.textContent = "Vraag: " + (currentQuestionPSM + 1);

    if (currentQuestionPSM >= shuffledQuestionsPSM.length) {

        questionPSM.textContent = "Categorie voltooid!";
        nextQPSM.classList.add("notshow");
        questionsPSM.classList.add("notshow");
        feedBackPSM.classList.add("notshow");
        qCounterPSM.classList.add("notshow");
        returnButPSM.classList.remove("notshow");

    }
    else {

        let currentQuestionPSMs = shuffledQuestionsPSM[currentQuestionPSM];

        questionPSM.textContent = currentQuestionPSMs.question;

        butAPSM.textContent = currentQuestionPSMs.answers[0];
        butBPSM.textContent = currentQuestionPSMs.answers[1];
        butCPSM.textContent = currentQuestionPSMs.answers[2];
        butDPSM.textContent = currentQuestionPSMs.answers[3];

        questionsPSM.classList.remove("notshow");
    }
}


function checkAnswerPSM(input) {

    let currentQuestionPSMs = shuffledQuestionsPSM[currentQuestionPSM];

    const answerPSM = currentQuestionPSMs.answer;

    if (input === answerPSM) {

        feedBackPSM.textContent = "Correct! Druk op volgende vraag!";
        scorePSM = scorePSM + 25;
        scoreDisplayPSM.textContent = "Score: " + scorePSM;

        questionsPSM.classList.add("notshow");
        feedBackPSM.style.color = "green";
        updateTotalScore();
    }
    else {

        feedBackPSM.textContent = "Fout! Probeer het opnieuw.";
        feedBackPSM.style.color = "red";

        if (scorePSM === 0) {
            scorePSM = scorePSM - 0;
        }
        else {
            scorePSM = scorePSM - 25;
        }

        scoreDisplayPSM.textContent = "Score: " + scorePSM;
        updateTotalScore();
    }
}


butAPSM.addEventListener("click", function() {
    checkAnswerPSM(butAPSM.textContent);
});

butBPSM.addEventListener("click", function() {
    checkAnswerPSM(butBPSM.textContent);
});

butCPSM.addEventListener("click", function() {
    checkAnswerPSM(butCPSM.textContent);
});

butDPSM.addEventListener("click", function() {
    checkAnswerPSM(butDPSM.textContent);
});

/*catergorie 4 einde*/

/*voorbeeld objects*/




console.log(questionsAsObjectsWITP[0].question)
/*voorbeeld objects*/