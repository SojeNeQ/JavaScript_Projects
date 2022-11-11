// var a let je proměnná u které se předpokládá, že se bude měnit
// const // je proměnná, u které se předpokládá, že se nebude měnit

const heading = document.getElementById("text");
const speedOr = document.getElementById("speed");
const text = "Vypisuji text";

let idletter = 1;
let delay = 500 / speedOr.value;

function printText() {
    heading.innerText = text.slice(0, idletter);

    // Zvyšuji o jedničku
    idletter++;

    // Vyresetuje idletter zpět na 1 a text se začne vypisovat znovu
    if (idletter > text.length) {
        idletter = 1
    }

    // spustí funkci printText se zpožděním speed
    setTimeout(printText, delay);

}

printText();


speedOr.addEventListener("input", function (event) {
    delay = 500 / event.target.value
})