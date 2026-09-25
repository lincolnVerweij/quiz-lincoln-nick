console.log("JS succesvol gekoppeld");

const vragen = [
    "In welke game maakte het personage Mario voor het eerst zijn opwachting?",
    "Hoe heet het koninkrijk waarin de meeste The Legend of Zelda-games zich afspelen?",
    "Welke drie starter-typen (elementen) kies je aan het begin van vrijwel elke hoofd-Pokémon-game?",
    "Welke kleur heeft Yoshi oorspronkelijk?",
    "Wat is de naam van de populaire levenssimulatiegame waarin je een eiland opbouwt met dieren als buren?",
    "In welk decennium werd de allereerste Nintendo Entertainment System (NES) uitgebracht?",
    "Welke Nintendo-console had als eerste twee schermen, waarvan één een aanraakscherm was?",
    "Wat was de unieke eigenschap van de Nintendo Wii waarmee spelers games konden besturen met bewegingen?",
    "Met welke hybride console kun je zowel op de tv als onderweg spelen?",
    "Hoe heette de opmerkelijke paarse console van Nintendo die gebruikmaakte van kleine MiniDiscs?",
    "Welke schurk ontvoert Prinses Peach keer op keer in de Mario-reeks?",
    "Wat is de naam van de roze, bolvormige held die vijanden kan opslokken om hun krachten over te nemen?",
    "Welke premiejager draagt het iconische Power Suit in de Metroid-serie?",
    "Wie is de trouwe broer van Mario die gekleed gaat in het groen?",
    "Welke vos voert het ruimteteam aan in de game Star Fox?",
    "Welk product maakte Nintendo toen het bedrijf in 1889 werd opgericht?",
    "Welke beroemde Japanse game-ontwerper wordt gezien als de 'vader' van Mario en Zelda?",
    "In welk land staat het hoofdkantoor van Nintendo?",
    "Hoe heten de fysieke beeldjes van Nintendo die je kunt scannen om extra inhoud in games vrij te spelen?",
    "Wat is de naam van het overdekte attractieparkgebied van Nintendo dat te vinden is in diverse Universal Studios-parken?"
];

const optie1 = [
    "Donkey Kong", "Mushroom Kingdom", "Elektrisch, IJs, Gif", "Blauw", "Stardew Valley",
    "Jaren '70", "Game Boy Advance", "4K resolutie", "Nintendo Switch", "Nintendo 64",
    "King Dedede", "Jigglypuff", "Samus Aran", "Wario", "Fox McCloud",
    "Speelkaarten", "Masahiro Sakurai", "Verenigde Staten", "Skylanders", "Nintendo Land"
];

const optie2 = [
    "Pac-Man", "Hyrule", "Gras, Vuur, Water", "Rood", "Animal Crossing",
    "Jaren '80", "Nintendo DS", "Virtual Reality", "Wii U", "Nintendo GameCube",
    "Ganon", "Kirby", "Captain Falcon", "Waluigi", "Falco Lombardi",
    "Bordspellen", "Satoru Iwata", "Japan", "Disney Infinity", "Mario Park"
];

const optie3 = [
    "Space Invaders", "Dreamland", "Normaal, Geest, Draak", "Groen", "Harvest Moon",
    "Jaren '90", "Nintendo 3DS", "Motion control", "Game Boy", "Super Nintendo",
    "Bowser", "Toad", "Solid Snake", "Luigi", "Peppy Hare",
    "Houten speelgoed", "Shigeru Miyamoto", "Zuid-Korea", "amiibo", "Super Nintendo World"
];

const optie4 = [
    "Frogger", "Kanto", "Rots, Vliegend, Vecht", "Geel", "The Sims",
    "Jaren '00", "Wii U", "Dual-screen", "Virtual Boy", "Nintendo Wii",
    "Ridley", "Yoshi", "Master Chief", "Toad", "Slippy Toad",
    "Arcadekasten", "Eiji Aonuma", "China", "Nendoroid", "Hyrule Fantasy"
];

const goedeAntwoorden = [1, 2, 2, 3, 2, 2, 2, 3, 1, 2, 3, 2, 1, 3, 1, 1, 3, 2, 3, 3];



let vIndex = 0;
let cAns = -1;
let score = 0;
let aantalGoed = 0;
let aantalFout = 0;

const vraagTekst = document.getElementById("vraagTekst");
const vraagTitel = document.getElementById("vraagTitel");
const volgendeKnop = document.getElementById("volgendeKnop");
const scoreTracker = document.getElementById("scoreTracker");

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
    scoreTracker.innerText = "Goed: " + aantalGoed + " | Fout: " + aantalFout;

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

    if(cAns === gekozenAntwoord) {
        score += 100;
        aantalGoed++;
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
    volgendeKnop.style.display = "none";

    aBtn1.style.display = "none";
    aBtn2.style.display = "none";
    aBtn3.style.display = "none";
    aBtn4.style.display = "none";
}

updateScherm();