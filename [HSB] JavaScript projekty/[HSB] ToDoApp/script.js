// ************* Výběr elementů *************

// // querySelector vybere se jen ten první ze shora na který narazí
// let paragraph = document.querySelector("#david")
// // console.log(paragraph)


// // querySelectorAll vyberou se všechny
// let allParagraphs = document.querySelectorAll("p")
// // console.log(allParagraphs[0]) // ten první se vybere
// // console.log(allParagraphs[1]) // ten druhej se vybere je to posunuté o jedno



// //getElementById vybere jen ten, který má ID
// let myId = document.getElementById("david")
// // console.log(myId)



// // getElementsByClassName vybere jen ten, který má classu
// let myClass = document.getElementsByClassName("myClass")
// console.log(myClass[0])





// ************* Výzva výběr tagů 1# *************

// // Vyberte pomocí querySelectoru nadpis h1 a vypište do konzole
// let heading = document.querySelector("h1")
// // console.log(heading)


// // Vyberte pomocí querySelectoru odstavec s idéčkem test2 a vypište do konzole
// let paragraph = document.querySelector("#test2")
// // console.log(paragraph)


// // Vyberte pomocí querySelectorAll oba nadpisy h2 a oba dva vypište do konzole (každý zvlášť)
// let paragraphs = document.querySelectorAll("h2")
// // console.log(paragraphs[0])
// // console.log(paragraphs[1])


// // Vyberte pomocí querySelectorAll oba odstavce s třídou test1 a oba vypište do konzole (každý zvlášť)
// let myParagraphs = document.querySelectorAll(".test1")
// // console.log(myParagraphs[0])
// // console.log(myParagraphs[1])


// // Vyberte pomocí getElementsByClassName odstavce s třídou test1 a oba vypište do konzole (každý zvlášť)
// let otherParagraphs = document.getElementsByClassName("test1")
// // console.log(otherParagraphs[0])
// // console.log(otherParagraphs[1])


// // Vyberte pomocí getElementById odstavec s idéčkem test2 a vypište do konzole 
// let myId = document.getElementById("test2")
// // console.log(myId)





// ************* Hraní si s texem *************

// let heading = document.querySelector("h1")
// console.log(heading.textContent) // Text content je, aby se chránilo proti XXS nejvíce bezpečný

// // console.log(heading.innerText) // nic moc prej :D jen, že to existuje
// // console.log(heading.innerHTML) // na tagy je toto

// heading.textContent = "Nový nadpis" // změnění obsahu té H1
 




// ************* Procházení pole odstavců *************

// let paragraphs = document.querySelectorAll("p")
// // console.log(paragraphs)

// paragraphs.forEach(function(oneParagraph){
//     console.log(oneParagraph) // všechny se napíšou zvlášť
//     console.log(oneParagraph.textContent) // vypíšou se ty texty
//     oneParagraph.textContent = "Vymění všechny ty loremy"
// })





// ************* Odstranění prvku podle obsahu (remove) *************

// let paragraphs = document.querySelectorAll("p")
// paragraphs.forEach(function(oneParagraph){
//     if(oneParagraph.textContent.toLowerCase().includes("nakrmit")){
//         oneParagraph.remove()
//     } // toLowerCase je na to, aby převedlo vše na malé písmena. Nesmím zapomenout na závorky.
// })





// ************* Nové HTML elementy a přidání do stránky *************

// // Vložení ("p") do HTML
// const newParagraph = document.createElement("p")
// newParagraph.textContent = "Text do nového odstavce"
// document.querySelector("header").appendChild(newParagraph)

// // Založení divu
// const newDiv = document.createElement("div")
// document.querySelector("header").appendChild(newDiv)

// // VLožení do divu ("p")
// const secondParagraph = document.createElement("p")
// secondParagraph.textContent = "Testovací text do divu"
// newDiv.appendChild(secondParagraph)

// // přidání na konec
// secondParagraph.append("Nový text")

// // Přidání na začátek ("p")
// secondParagraph.prepend("Starý text")

// // Přidání spanu na začátek ("p")
// const newSpan = document-createElement("span")
// newSpan.textContent = "Nový span"
// secondParagraph.prepend(newSpan)





// *********// Rozdíl mezi "input" a "change" //*********

// let input = document.querySelector("#input-text")

// // input.addEventListener("change", function(){
// //     console.log(event.target.value) // Znamená vyber z toho eventu value což je to co jsem tam napsal do toho políčka
// // }) // Tohle vypíše jen to co tam napíšu


// input.addEventListener("input", function(){
//     console.log(event.target.value) // Znamená vyber z toho eventu value což je to co jsem tam napsal do toho políčka
// }) // Tohle vypíše každou změnu, kterou udělám v konzoli a hned nemusím dávat enter nebo klikknout jinam





// *********// Filtrování podezřelích //*********

let criminals = [{
    firstName: "Martin",
    secondName: "Zelený", 
    birth: 1985,
    licencePlate: "85C3322", 
    address: "U sloupů 16", 
    city: "České Budějovice"
}, {
    firstName: "Jana", 
    secondName: "Růžová", 
    birth: 1996, 
    licencePlate: "93K3922", 
    address: "Malská 29", 
    city: "České Budějovice"
}, {
    firstName: "Anna", 
    secondName: "Modrá", 
    birth: 1989,
    licencePlate: "2EP6328", 
    address: "Stevardská 38", 
    city: "České Budějovice"
}]


// Uložím data z políčka
let filtres = {
    searchText: ""
}


// Filtr
const renderCriminals = function(ourCriminals, tryToFind){
    let arrayResult = ourCriminals.filter(function(oneSuspect){
        return oneSuspect.licencePlate.toLowerCase().includes(tryToFind.searchText.toLowerCase())
    })

    // console.log(arrayResult)

    document.querySelector("#idCriminal").innerHTML = "" // InnerHTMl vše vyprázdní a proto se tam nepíšou za sebou, ale vždy nějnovější. Je to, jakoby pročištění

    arrayResult.forEach(function(oneSuspect){
        let paragraph = document.createElement("p")
        paragraph.innerHTML = `Jméno: ${oneSuspect.firstName}, <br> Příjmení: ${oneSuspect.secondName}, <br> Rok narození: ${oneSuspect.birth}, <br> Poznávací značka: ${oneSuspect.licencePlate}, <br> Adresa: ${oneSuspect.city}` 

        document.querySelector("#idCriminal").appendChild(paragraph)

    })
}





// Načtu data z políčka
let licencePlate = document.querySelector("#licence-plate")

licencePlate.addEventListener("input", function(event){
    console.log(filtres.searchText = event.target.value)
    renderCriminals(criminals, filtres) // tohle vyvolává tu funkci
})