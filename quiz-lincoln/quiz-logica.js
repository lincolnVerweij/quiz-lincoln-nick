console.log("JS successvol gekoppeld");

let vIndex = 1;

let vragen = ["Test 1", 
        "Test 2", 
        "Test 3",
        "Test 4",]
        
vraagTekst.innerText = vragen[0];

function volgendeVraag() {
    vIndex = vIndex + 1;
    console.log(vIndex);

    //vragen[1];

    let vTekstIndex = vIndex - 1;

    let vraagTekst = document.getElementById("vraagTekst");
    vraagTekst.innerText = vragen[vTekstIndex];

    let vraagTitel = document.getElementById("vraagTitel");
    vraagTitel.innerText = "Vraag " + vIndex + ":";
}

console.log(vIndex);