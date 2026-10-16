console.log("JS succesvol gekoppeld");

const categorieData = {
    1: {
        titel: "Legendarische game-franchises",
        vragen: [
            "In welke game maakte het personage Mario voor het eerst zijn opwachting?",
            "Hoe heet het koninkrijk waarin de meeste The Legend of Zelda-games zich afspelen?",
            "Welke drie starter-typen (elementen) kies je aan het begin van vrijwel elke hoofd-Pokémon-game?",
            "Welke kleur heeft Yoshi oorspronkelijk?",
            "Wat is de naam van de populaire levenssimulatiegame waarin je een eiland opbouwt met dieren als buren?"
        ],
        optie1: ["Donkey Kong", "Mushroom Kingdom", "Elektrisch, IJs, Gif", "Blauw", "Stardew Valley"],
        optie2: ["Pac-Man", "Hyrule", "Gras, Vuur, Water", "Rood", "Animal Crossing"],
        optie3: ["Space Invaders", "Dreamland", "Normaal, Geest, Draak", "Groen", "Harvest Moon"],
        optie4: ["Frogger", "Kanto", "Rots, Vliegend, Vecht", "Geel", "The Sims"],
        goedeAntwoorden: [1, 2, 2, 3, 2]
    },
    2: {
        titel: "Evolutie van de hardware",
        vragen: [
            "In welk decennium werd de allereerste Nintendo Entertainment System (NES) uitgebracht?",
            "Welke Nintendo-console had als eerste twee schermen, waarvan één een aanraakscherm was?",
            "Wat was de unieke eigenschap van de Nintendo Wii waarmee spelers games konden besturen met bewegingen?",
            "Met welke hybride console kun je zowel op de tv als onderweg spelen?",
            "Hoe heette de opmerkelijke paarse console van Nintendo die gebruikmaakte van kleine MiniDiscs?"
        ],
        optie1: ["Jaren '70", "Game Boy Advance", "4K resolutie", "Nintendo Switch", "Nintendo 64"],
        optie2: ["Jaren '80", "Nintendo DS", "Virtual Reality", "Wii U", "Nintendo GameCube"],
        optie3: ["Jaren '90", "Nintendo 3DS", "Motion control", "Game Boy", "Super Nintendo"],
        optie4: ["Jaren '00", "Wii U", "Dual-screen", "Virtual Boy", "Nintendo Wii"],
        goedeAntwoorden: [2, 2, 3, 1, 2]
    },
    3: {
        titel: "Bekende personages/iconen",
        vragen: [
            "Welke schurk ontvoert Prinses Peach keer op keer in de Mario-reeks?",
            "Wat is de naam van de roze, bolvormige held die vijanden kan opslokken om hun krachten over te nemen?",
            "Welke premiejager draagt het iconische Power Suit in de Metroid-serie?",
            "Wie is de trouwe broer van Mario die gekleed gaat in het groen?",
            "Welke vos voert het ruimteteam aan in de game Star Fox?"
        ],
        optie1: ["King Dedede", "Jigglypuff", "Samus Aran", "Wario", "Fox McCloud"],
        optie2: ["Ganon", "Kirby", "Captain Falcon", "Waluigi", "Falco Lombardi"],
        optie3: ["Bowser", "Toad", "Solid Snake", "Luigi", "Peppy Hare"],
        optie4: ["Ridley", "Yoshi", "Master Chief", "Toad", "Slippy Toad"],
        goedeAntwoorden: [3, 2, 1, 3, 1]
    },
    4: {
        titel: "Nintendo als bedrijf/cultuur",
        vragen: [
            "Welk product maakte Nintendo toen het bedrijf in 1889 werd opgericht?",
            "Welke beroemde Japanse game-ontwerper wordt gezien als de 'vader' van Mario en Zelda?",
            "In welk land staat het hoofdkantoor van Nintendo?",
            "Hoe heten de fysieke beeldjes van Nintendo die je kunt scannen om extra inhoud in games vrij te spelen?",
            "Wat is de naam van het overdekte attractieparkgebied van Nintendo dat te vinden is in diverse Universal Studios-parken?"
        ],
        optie1: ["Speelkaarten", "Masahiro Sakurai", "Verenigde Staten", "Skylanders", "Nintendo Land"],
        optie2: ["Bordspellen", "Satoru Iwata", "Japan", "Disney Infinity", "Mario Park"],
        optie3: ["Houten speelgoed", "Shigeru Miyamoto", "Zuid-Korea", "amiibo", "Super Nintendo World"],
        optie4: ["Arcadekasten", "Eiji Aonuma", "China", "Nendoroid", "Hyrule Fantasy"],
        goedeAntwoorden: [1, 3, 2, 3, 3]
    }
};

const urlParams = new URLSearchParams(window.location.search);
const gekozenCat = urlParams.get('cat') || 1; 

const actieveCategorie = categorieData[gekozenCat];
const vragen = actieveCategorie.vragen;
const optie1 = actieveCategorie.optie1;
const optie2 = actieveCategorie.optie2;
const optie3 = actieveCategorie.optie3;
const optie4 = actieveCategorie.optie4;
const goedeAntwoorden = actieveCategorie.goedeAntwoorden;

let vIndex = 0;
let cAns = -1;
let score = 0;
let aantalGoed = 0;
let aantalFout = 0;
let powerupsGehad = 0;

const vraagTekst = document.getElementById("vraagTekst");
const vraagTitel = document.getElementById("vraagTitel");
const volgendeKnop = document.getElementById("volgendeKnop");
const scoreTracker = document.getElementById("scoreTracker");
const powerupsText = document.getElementById("powerupsText");

const aBtn1 = document.getElementById("btn-1");
const aBtn2 = document.getElementById("btn-2");
const aBtn3 = document.getElementById("btn-3");
const aBtn4 = document.getElementById("btn-4");

aBtn1.onclick = function() { kiesAntwoord(1); }
aBtn2.onclick = function() { kiesAntwoord(2); }
aBtn3.onclick = function() { kiesAntwoord(3); }
aBtn4.onclick = function() { kiesAntwoord(4); }

volgendeKnop.onclick = function() {
    aantalFout++;
    score -= 25;
    volgendeVraag();
};

function updateScherm() {
    vraagTekst.innerText = vragen[vIndex];
    vraagTitel.innerText = "Vraag " + (vIndex + 1) + ":";
    scoreTracker.innerText = "Goed: " + aantalGoed + " | Fout: " + aantalFout;
    powerupsText.innerText = "Powerups: " + powerupsGehad; 

    aBtn1.innerText = optie1[vIndex];
    aBtn2.innerText = optie2[vIndex];
    aBtn3.innerText = optie3[vIndex];
    aBtn4.innerText = optie4[vIndex];

    if (vIndex === vragen.length - 1) {
        volgendeKnop.innerText = "Finish de quiz";
    } else {
        volgendeKnop.innerText = "Volgende vraag / Overslaan";
    }
}

function kiesAntwoord(gekozenAntwoord) {
    cAns = goedeAntwoorden[vIndex];

    if (cAns === gekozenAntwoord) {
        score += 100;
        aantalGoed++;

        if (aantalFout >= 2) {
            if (Math.random() < 0.5) {
                aantalFout -= 2; 
                powerupsGehad += 1; 
            }
        }
    } else {
        score -= 25;
        aantalFout++;
    }

    volgendeVraag();
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
    vraagTekst.innerText = "Gefeliciteerd! Je hebt alle vragen afgerond. Je score is: " + score;
    scoreTracker.innerText = "Eindstand - Goed: " + aantalGoed + " | Fout: " + aantalFout;
    powerupsText.innerText = "Powerups gehad: " + powerupsGehad;

    volgendeKnop.style.display = "none";
    aBtn1.style.display = "none";
    aBtn2.style.display = "none";
    aBtn3.style.display = "none";
    aBtn4.style.display = "none";
}

updateScherm();