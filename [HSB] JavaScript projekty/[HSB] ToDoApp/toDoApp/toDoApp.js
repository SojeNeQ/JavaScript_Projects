let myToDos = [{
    text: "Vynést koš",
    completion: false
}, {
    text: "Dojít nakoupit",
    completion: false
}, {
    text: "Uklidit",
    completion: true
}, {
    text: "Nakrmit psa",
    completion: true
}, {
    text: "Nakrmit kočku",
    completion: false
}]


// === je rovná se
// !== je nerovná se

let toDoLeft = myToDos.filter(function(oneToDo){
    return oneToDo.completion === false 
})



const paragraph = document.createElement("p")
paragraph.textContent = `Ještě zbývá udělat úkolů: ${toDoLeft.length}`
document.querySelector("main").appendChild(paragraph)


// Vypsání všech úkolů do odstavců. který se zobrazí na stránce

for( let i = 0; i < myToDos.length; i++){
    let paragraph = document.createElement("p")
    paragraph.textContent = myToDos[i].text 
    document.querySelector("#results-toDos").appendChild(paragraph)
}


// for( let i = 0; i < myToDos.length; i++){
//     let paragraph = document.createElement("p")
//     if(myToDos[i].completion === false){
//         paragraph.textContent = myToDos[i].text // umístění obsahu to je ten text Content a .text to je, že chci vypsat jen ten text nic jiného
//         document.querySelector("main").appendChild(paragraph)
//     }
// }


// *********// Tlačítko //*********

// document.querySelector("myBtn").addEventListener("click", function(event){
//     console.log("Kliknutí bylo provedeno")
// })



// *********// Filtrování //*********

// Pro ukládání textu z vyhledávácího políčka
const filtres = {
    searchingText: ""
}


// Obecná filtrovací funkce
let renderToDos = function(ourToDos, weSearching){
    let ourResults = ourToDos.filter(function(oneToDo){
        return oneToDo.text.toLowerCase().includes(weSearching.searchingText.toLowerCase())
    })

    document.querySelector("#results-toDos").innerHTML = ""

    ourResults.forEach(function(oneResult){
        let paragraph = document.createElement("p")
        paragraph.textContent = oneResult.text
        document.querySelector("#results-toDos").appendChild(paragraph)
    })
}



// Načtu text z políčka
let searchText = document.querySelector("#search-text")
searchText.addEventListener("input", function(event){
    filtres.searchingText = event.target.value
    console.log(filtres)

    // Volám filtrovací funkci
    renderToDos(myToDos, filtres)
})
