// // ************** Číslo 1 **************

// document.querySelector("#test-form").addEventListener("submit", function(event){
//     // vypnutí výchozího chování folmuláře
//     event.preventDefault()

//     // přístup k obsahu inputu
//     console.log(event.target.elements.firstName.value) // ty tečky to je cesta, kterou chci napsat do konzole

//     // vytvořím odstavec a přidám do něj text z políčka
//     let paragraph = document.createElement("p")
//     paragraph.textContent = event.target.elements.firstName.value

//     document.querySelector("#from-form").appendChild(paragraph)

//     // po odeslání toto vymaže obsah toho políčka
//     event.target.elements.firstName.value = ""
// })





// // ************** Číslo 2 **************

// document.querySelector("#test2-form").addEventListener("submit", function(event){
//     // Vypnu výchozí chování formuláře
//     event.preventDefault()

//     // Načtení hodnot z políček
//     let firstName2 = event.target.elements.firstName2.value
//     let secondName2 = event.target.elements.secondName2.value
//     let email = event.target.elements.email.value

//     // Vytvořím odstavec a přidám do něj text z políčka
//     let paragraph = document.createElement("p")
//     paragraph.innerHTML = `Jméno: ${firstName2}, <br> Příjmení: ${secondName2}, <br> E-mail: ${email}`
    
//     document.querySelector(".from-form2").appendChild(paragraph)

//     // Po odeslání vymažeme obsah políček
//     event.target.elements.firstName2.value = ""
//     event.target.elements.secondName2.value = ""
//     event.target.elements.email.value = ""
// })




// // ************** Něco jako toDoApp **************

// let myForm = document.querySelector("#my-form") 
// let count = 0;

// myForm.addEventListener("submit", function(event){

//     // vypneme výchozí chování formuláře
//     event.preventDefault()

//     // přístup k obsahu políčka
//     console.log(event.target.elements.task.value)

//     // count zvyšujeme o 1 
//     count = count + 1


//     let input = document.createElement("input")
//     input.type = "checkbox"
//     input.id = `testovaci-${count}`
//     console.log(input)
//     document.querySelector("#results").appendChild(input)

//     let label = document.createElement("label") 
//     label.textContent = event.target.elements.task.value 
//     label.setAttribute("for", `testovaci-${count}`)
//     document.querySelector("#results").appendChild(label) 
    
//     console.log(label)

//     // vymaže obsah políčka
//     event.target.elements.task.value = ""

// })



// // ************** Číslo 3 **************
// Předělání skrz CSS na jínou barvu či předělávání skrz JavaScript z CSS

// let heading = document.querySelector("h1")

// // Když na tu "h1" najedu myší tak se předělá na modrou
// heading.addEventListener("mouseenter", function(event){
//     heading.style.color = "blue"
// })

// // Když z té "h1" dám pryč mýš tak z toho bude zelená
// heading.addEventListener("mouseleave", function(evenet){
//     heading.style.color = "green"
// })

// // Když chci změnit fontsize
// heading.style.fontSize = "30px"

// // Když chci displey none
// // heading.style.display = "none"

// // Když chci font-weight, což je odtučnění
// heading.style.fontWeight = 400




// // ************** Posouvání čtverečku **************

// let myDiv = document.querySelector(".square")
// console.log(myDiv)

// // Lze zapsat i mínus
// // myDiv.style.top = "50px"
// // myDiv.style.left = "-30px"

// let newLeft = null;
// let newTop = null;

// // addEventListener je, že kontroluje na co zmáčknu
// document.querySelector("body").addEventListener("keydown", function(event){
//     if(event.key === "ArrowLeft"){
//         newLeft = newLeft - 10
//         myDiv.style.left = newLeft + "px" // Toto je na zapsání px, protože tam nejsou
//     } else if (event.key === 'ArrowRight'){
//         newLeft =  newLeft + 10
//         myDiv.style.left = newLeft + "px"
//     } else if (event.key === "ArrowUp"){
//         newTop = newTop - 10
//         myDiv.style.top = newTop + "px"
//     } else if (event.key === "ArrowDown"){
//         newTop = newTop + 10
//         myDiv.style.top = newTop + "px"
//     }
// })





// ************** Ikonka posouvání nahoru **************

// window.addEventListener("scroll", function(){
//     let scrolled = window.scrollY
//     let scrollable = document.documentElement.scrollHeight - window.innerHeight

//     if(Math.ceil(scrolled) === scrollable){
//         let toTop = document.querySelector(".top-page")
//         toTop.style.display = "block"

//         toTop.addEventListener("click", function(){
//             toTop.style.display = "none"
//         })
//     }
// })


// // ************** Scroll **************

// let firstItemMenu = document.querySelector(".first-item-menu")
// let scrollGoal = document.querySelector(".scroll-goal").offsetTop

// firstItemMenu.addEventListener("click", function(){
//     window.scrollTo({
//     top: scrollGoal,
//     behavior: "smooth"
//     })
// })




// // ************** Local storage **************

// // Přidání položky
// localStorage.setItem("location","České Budějovice")
// localStorage.setItem("firstName","David")
// // Update položky
// localStorage.setItem("location","Praha")
// localStorage.setItem("firstName","Harry")
// // Získání položky
// console.log(localStorage.getItem("location"))
// console.log(localStorage.getItem("firstName"))
// // Smazání položky
// //  localStorage.removeItem("location")
// //  localStorage.removeItem("firstName")
// // Smazání všeho v localStorage
// localStorage.clear()




// // ************** vypisování z LocalStorage (jedna hodnota) **************

// // Aby to zůstalo v LocalStorage
// if(localStorage.getItem("users") == null ){
//     var myArray = []
// } else {
//     myArray = JSON.parse(localStorage.getItem("users"))
// }

// let myForm = document.querySelector("#test-form")
// myForm.addEventListener("submit", function(event){
//     event.preventDefault()

//     myArray.push(event.target.elements.FirstName.value)

//     // Vrátnice
//     myArrayToLS = JSON.stringify(myArray)

//     // Sklad
//     localStorage.setItem("users", myArrayToLS)

//     event.target.elements.FirstName.value = ""

//     let myArrayFromLS = localStorage.getItem("users")

//     // Vytažení ven skrz vrátnici
//     let myArrayFromLSj = JSON.parse(myArrayFromLS)

//     let paragraph = document.createElement("p")
//     paragraph.textContent = myArrayFromLSj[myArrayFromLSj.length - 1]

//     // Připsání na stránku
//     document.querySelector("#my-users").appendChild(paragraph)
// })

// let myPresentArray = localStorage.getItem("users")
// let myPresentArrayJ = JSON.parse(myPresentArray)

// if(myPresentArrayJ !== null){
//     myPresentArrayJ.forEach(function(oneUser){
//         // Vložení do stránky, ikdyž jí vypnu a zapnu
//         let paragraph = document.createElement("p")
//         paragraph.textContent = oneUser
        
//         document.querySelector("#my-users").appendChild(paragraph)
//     })
// }




// // ************** vypisování z LocalStorage (více hodnot) **************

// let myForm = document.querySelector("#test-form_1")

// if(localStorage.getItem("criminals") == null){
//     var myArray = []
// } else {
//     myArray = JSON.parse(localStorage.getItem("criminals"))
// }


// myForm.addEventListener("submit", function(event){
//     event.preventDefault()

//     myArray.push({
//         id: "",
//         firstName: event.target.elements.firstName.value,
//         secondName: event.target.elements.secondName.value,
//         crime: event.target.elements.crime.value

//     })

//     myArrayJSON = JSON.stringify(myArray)
//     localStorage.setItem("criminals", myArrayJSON)
// })

