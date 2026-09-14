console.log("JS successvol gekoppeld");

let vIndex = 1;

function volgendeVraag() {
    vIndex = vIndex + 1;
    console.log(vIndex);

    let vraagTitel = document.getElementById("vraagTitel");
    vraagTitel.innerText = "Vraag " + vIndex + ":";
}

console.log(vIndex);