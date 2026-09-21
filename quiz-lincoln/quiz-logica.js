console.log("JS succesvol gekoppeld");

const vragen = ["Test 1", "Test 2", "Test 3", "Test 4"];
let vIndex = 0;

let cAns = -1;
let score = 0;

const vraagTekst = document.getElementById("vraagTekst");
const vraagTitel = document.getElementById("vraagTitel");
const volgendeKnop = document.getElementById("volgendeKnop");

const aBtn1 = document.getElementById("btn-1");
const aBtn2 = document.getElementById("btn-2");
const aBtn3 = document.getElementById("btn-3");
const aBtn4 = document.getElementById("btn-4");

aBtn1.onclick = function() { kiesAntwoord(1); }
aBtn2.onclick = function() { kiesAntwoord(2); }
aBtn3.onclick = function() { kiesAntwoord(3); }
aBtn4.onclick = function() { kiesAntwoord(4); }

function updateScherm() {
    vraagTekst.innerText = vragen[vIndex];
    vraagTitel.innerText = "Vraag " + (vIndex + 1) + ":";

    if (vIndex === vragen.length - 1) {
        volgendeKnop.innerText = "Finish de quiz";
    } else {
        volgendeKnop.innerText = "Volgende vraag";
    }
}

function kiesAntwoord(gekozenAntwoord) {
    if (vIndex === 1) {
        cAns = 1;

        if(cAns === gekozenAntwoord) {
            score = score += 100;
            volgendeVraag();
        } else {
            vIndex = vIndex;
            updateScherm()
        }
    } else if (vIndex === 2) {
        cAns = 2;

        if(cAns === gekozenAntwoord) {
            score = score += 100;
            volgendeVraag();
        } else {
            vIndex = vIndex;
            updateScherm()
        }
    }
}

function volgendeVraag() {
    if (vIndex < vragen.length - 1) {
        vIndex++;
        updateScherm();
    } else {
        toonResultaten();
    }
}

function toonResultaten() {
    vraagTitel.innerText = "Resultaten";
    vraagTekst.innerText = "Gefeliciteerd! Je hebt alle vragen van de quiz afgerond.";
    volgendeKnop.style.display = "none";

    aBtn1.style.display = "none";
    aBtn2.style.display = "none";
    aBtn3.style.display = "none";
    aBtn4.style.display = "none";
}

updateScherm();