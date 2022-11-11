/////////// Vysvětlení ///////////

// // // // String (text) // // // //
// let firstName = "David"
// let job = "Front-end developer"
// console.log("Ahoj, jmenuji se" + " " + firstName + " a pracuji jako" + " " + job + ".");



// // // // Number (číslo) // // // //
// let age = 22
// console.log(age);



// // // // Početní operace (výpočty) // // // //
// let x = age + 10 - 5
// console.log(x);



// // // // Boolean (pravda, nepravda) // // // //
// let adult = true
// let adult = false



// // // // Boolean - operátory // // // //
// let result = age === 50
// console.log(result)

/*
=== rovná se
!== nerovná se
< menší než (<=)
> větší než (>=)
*/



// // // // Podmínky (if a else) (když a jinak) // // // //

// let age = 20

// if(age >= 18) {
//     console.log("Jsi dospělý")
// } else { console.log("Jsi dítě")
// }



// // // // Logické operátory - a zároveň (&&), nebo (||)

// a zároveň - && (levý option + 7)
// let firstName = "David"
// let height = 185

// if(firstName === "David" && height === 185){
//     console.log("Je podezřelý")
// }

// // Tabulka k - a zároveň &&
// true = true, true
// false = false, true 
// false = true, false 
// false = false, false


// nebo - || (levý shift + vedle něho tlačítko)
// let firstName = "Harry"
// let height = 195

// if(firstName === "Harry" || height === 195){
//     console.log("Je podezřelý")
// }

// // Tabulka k - nebo ||
// true = true, true 
// true = false, true 
// true = true, false 
// false = false, false




/////////// Úkol č.1 ///////////

// úkol č.1
// let firstName = "David"
// let age = 22
// let x = age + 5
// console.log("Jmenuji se " + firstName + " a je mi " + age );
// console.log("Za pět let mi bude " + x);



/////////// Úkol č.2 ///////////

// // úkol č.2
// // Počet dosažených bodů studenty
// let student1 = 45
// let student2 = 70

// // Jména studentů
// let student1Name = "Harry"
// let student2Name = "Hermiona"

// // Výpočet úspěšnosti v %, maximální počet bodů je 100 
// let result1 = (student1 / 100) * 100
// let result2 = (student2 / 100) * 100

// // Výsledky
// console.log(student1Name + " dosáhl(a) " + result1 + "% úspěšnosti")
// console.log(student2Name + " dosáhl(a) " + result2 + "% úspěšnosti")



/////////// Zjištění dospělosti ///////////

// // String (text)
// let firstName = "David"

// // Number (číslo)
// let age = 21

// // Boolean (pravda, nepravda)
// let adult = age >= 15
// console.log(adult)

// Boolean - operátory
// let result = age <= 10

/*
=== rovná se
!== nerovná se
< menší než (<=)
> větší než (>=)
*/



/////////// Úkol č.3 ///////////

// // Definování věku
// let age = 80

// // Dítě
// let child = age < 18

// // Dospělý
// let adult = age >= 18

// // Důchodce
// let pensioner = age >= 65

// // Výpis výsledků
// console.log("Dítě: " + child)
// console.log("Dospělý: " + adult)
// console.log("Důchodce: " + pensioner)



/////////// Podmínky (if a else) (když a jinak) ///////////

// let age = 20

// if(age >= 18) {
//     console.log("Jsi dospělý")
// } else { console.log("Jsi dítě")
// }

// let firstName = "Harry"
// // or
// // let firstName = "David"


// if(firstName === "David"){ console.log("Ahoj Davide")
// } else { console.log("Neznám tě")
// }



/////////// Podmínky (if a else) (když a jinak) ///////////

// let firstName = "David"
// let firstName = "Martin"
// let firstName = "Michaela"
// let firstName = "Michal"

// David, Martin a Michaela

// if(firstName === "David"){
//     console.log("Dobrý den Davide. Můžete jít dále.")
// } else if(firstName === "Martin"){
//     console.log("Dobrý den Martine. Můžete jít dále.")
// } else if(firstName === "Michaela"){
//     console.log("Dobrý den Michaelo. Můžete jít dále.")
// }

// // Pokuď to nebude ani jedno z toho tak:

// else {
//     console.log("Nemůžette vstoupit. Nemáte oprávnění.")
// }



/////////// Úkol č.4 ///////////

// programátor, administrátor a sekretářka

// let firstName = "Programátor"
// let firstName = "Administrátor"
// let firstName = "Sekretářka"
// let firstName = "Technik"

// if(firstName === "Programátor"){
//     console.log("Jaký je rozdíl mezi HTML, CSS a JavaScriptem?")
// } else if(firstName === "Administrátor"){
//     console.log("Jaké znáte druhy sítí?")
// } else if(firstName === "Sekretářka"){
//     console.log("Jaké znáte funkce v excelu?")
// } else {
//     console.log("Pro tebe není žádná otazka")
// }


/////////// Úkol č.5 ///////////

// let temperature = 23

// if(temperature <= 10){
//     console.log("chladno")
// } else if (temperature >= 11 && temperature <= 25){
//     console.log("teplo")
// } else {
//     console.log("horko")
// };



/////////// Úkol č.6 ///////////


// let weight = 100
// let height = 190

// if(weight >= 100 || height >= 190){
//     console.log("Podezřelí")
// } else {
//     console.log("Neprověřovat")
// }




/////////// Variable shadowing ///////////

// // Jde to k nadřazenému a to je Harry
// let myName = "David"

// if(true){
//     let myName = "Harry"

//     if(true){
//         console.log(myName) 
//     }
// }


// // A tady zase se kouká na ten globální a to je David
// if(true){
//     console.log(myName)
// }




/////////// Vypsání textu neboli funkce ///////////

// function pozdrav1(){
//     console.log("toto je Pozdrav 1")
// }

// pozdrav1()


// // jíný zápis

// let pozdrav2 = function(){
//     console.log("Toto je Pozdrav 2")
// }

// pozdrav2()

// // Musí být vždy závorky

// // Ještě jeden zápis existuje

// let pozdrav3 = () => console.log("Toto je Pozdrav 3")

// pozdrav3()




/////////// Funkce - parametr a argument ///////////

// let naDruhou = function(num){
//     console.log(num * num)
// }

// naDruhou(2)
// naDruhou(5)
// naDruhou(10)

// let zdraviciFunkce = function(name){
//     console.log("Ahoj, já jsem " + name)

// }

// zdraviciFunkce("David")
// zdraviciFunkce("Kryštof")




///////// Úkol č.7 ///////////

// let naDruhou = (num) => console.log(num * num)

// naDruhou(8)

// let zdraviciFunkce = (firstName) => console.log("Ahoj, já jsem " + firstName)

// zdraviciFunkce("Kokot")



///////// Funkce result ///////////

// let naDruhous = function(number){
//     let result = number * number
//     return result
// }

// let value1 = naDruhous(5)
// value1 = value1 + 50
// console.log(value1)



// // Příklad
// let zvysovaciFunkce = function(num){
//     let result = num + 100
//     return result
// }

// let value2 = zvysovaciFunkce(7)
// console.log(value2)



///////// Undefined a null říkjí, že chybí hodnota ///////////

// undefined - znamená to, že jsem na něco zapomněl
// let age

// if(age === undefined){
//     console.log("Prosím, vyplňte věk")
// } else {
//     console.log(age)
// }

// //undefined jako argument funkce 
// let mojeFunkce = function(num){
//     console.log(num)
// }

// mojeFunkce()

// // undefined u return
// let mojeFunkce2 = function(num){
//     return num
// }

// let value = mojeFunkce2()
// console.log(value)


// // null jako přiřažená hodnota
// let myAge = 30
// myAge = null
// console.log(myAge)


///////// Funkce s více parametry ///////////

// let soucet = function(a, b){
//     return a + b
// }

// let value = soucet(20, 30)
// console.log(value)

//Defaultní (výchozí) hodnota
// let game = function(name = "Anonymní", score = 0){
//     console.log(name)
//     console.log(score)
// }

// //Pokuď budu hodnotu vyplňovat
// game("David" , 10)
// //Pokuď nebudu hodnotu vyplňovat
// game("David")


// Jak nastavit původní hodnotu
// let game = function(name = "Anonymní", score = 0){
//     console.log(name)
//     console.log(score)
// }

// game(undefined , 10)


// Zápis na jeden řádek
// let game = function(name = "Anonymní", score = 0){
//     return "Jméno: " + name + ", Score " + score
// }

// let value2 = game("David", 10)
// console.log(value2)



///////// úkol č. 7 ///////////

// // Globální scopre (num1, num2, num3) - Můžu zapsat kdekoli
// // Lokální scopre (a, b, c) - Můžu zapsat také kdekoli, ale to co je nad tím tak jak kdyby neplatilo třeba let Myname.

// let num1 = 8
// let num2 = 1
// let num3 = 0

// let pristup = function(a, b, c){
//     if(a === num1 && b === num2 && c === num3){
//         console.log("Můžete vstoupit")
//     } else {
//         console.log(("Spatně zadaný kod. Zkus to znovu"))
//     }
// }

// pristup(8, 1, 0)


///////// Temple Strings ///////////

// // Jde o nové uvzovky tyto ` ` Jsou pod zkratkou shift a hned vedle enteru na levo dole.

// let myName = "David Chlupatý"
// let age = 15

// // Nomrální uvozovky " "
// console.log("Ahoj, já jsem " + myName + " a je mi " + age + " let.")

// // Druhý uvozovky ` `
// console.log(`Ahoj, já jsem ${myName} a je mi ${age} let.`)

// // Druhý uvozovky ` `
// let pozdrav = function(firstName, lastName){
//     console.log(`Ahoj. mé jméno je ${firstName} a moje příjmení je ${lastName}`)
// }

// pozdrav("David","Chlupatý")



///////// Úkol č. 8 ///////////

// let firstName = "Harry"
// let secondName = "Potter"
// let age = 15
// let firstFriend = "Ron"
// let secondFriend = "Hermiona"

// console.log(`Ahoj. jmenuji se ${firstName} ${secondName} a je mi ${age} let. Moji přátelé jsou ${firstFriend} a ${secondFriend}.`)


// // Další

// let movie = "Ospalá díra"
// let director = "Tim Burton"
// let award = "nejlepší výkon ve výpravě"

// console.log(`Viděl jsem film ${movie}, který režisíroval ${director}. Tento film získal ocenění ${award}.`)



///////// Objekt ///////////

// // Je důležité na konci napsat čárku

// let myBook = { 
//     title: "Harry Potter a kámen mudrců",
//     author: "J. K. Rowlingová",
//     published: 1997
// }


// // Výpis jednotlivých vlastností
// console.log(myBook.title)
// console.log(myBook.author)
// console.log(myBook.published)


// // Výpis všech vlastností najednou
// console.log(`${myBook.title} je kniha od autorky ${myBook.author} a byla vydána v roce ${myBook.published}.`)


// // Změna vlastností objektu
// myBook.title = "Harry Potter a Tajemná komnata"
// myBook.published = 1998

// console.log(`${myBook.title} je kniha od autorky ${myBook.author} a byla vydána v roce ${myBook.published}.`)



///////// Úkol č.9 ///////////

// let person1 = "David"
// let pers1town = "Praha"
// let pers1age = 23

// let person2 = "Michal"
// let pers2town = "Chýně"
// let pers2age = 24

// let person3 = "Míša"
// let pers3town = "České Budějovice"
// let pers3age = 22

// console.log(`Jmenuje se ${person1} je mu ${pers1age} let a pochazí z města ${pers1town}.`)

// console.log(`Jmenuje se ${person2} je mu ${pers2age} let a pochazí z města ${pers2town}.`)

// console.log(`Jmenuje se ${person3} je mu ${pers3age} let a pochází z města ${pers3town}.`)

// // Lze také zapsat takto a je to mnohem rychlejší

// let person4 = {
//     name: "David Havelka",
//     age: 24,
//     city: "Praha"
// }

// let person5 = {
//     name: "Kokos Obecný",
//     age: 35,
//     city: "London"
// }

// console.log(`Jmenuje se ${person4.name} je mu ${person4.age} let a pochází z města ${person4.city}.`)

// console.log(`Jmenuje se ${person5.name} je mu ${person5.age} let a pochází z města ${person5.city}.`)



///////// Automatizace ///////////

// let firstBook = {
//     title: "Harry Potter a kámen mudrců",
//     author: "J. K. Rowlingová",
//     published: 1997
// }

// let secondBook = {
//     title: "Stařec a moře",
//     author: "Ernest Hemingway",
//     published: 1952
// }

// let resultBook = function(book){
//     console.log(`Kniha od ${book.author} z roku ${book.published} je velice známá a jmenuje se ${book.title}`)
// }

// resultBook(firstBook)
// resultBook(secondBook)



///////// Jak vyřešit např. pohlaví ///////////

// let person1 = {
//     name: "David Zibl",
//     age: 12,
//     city: "London",
//     gender: "male"
// }

// let person2 = {
//     name: "Eva Ritková",
//     age: 97,
//     city: "Prague",
//     gender: "female"
// }

// let person3 = {
//     name: "David Frejn",
//     age: 23,
//     city: "Los Angeles",
//     gender: "male"
// }

// let personInfo = function(person){
//     if(person.gender === "male"){
//         console.log(`Jmenuje se ${person.name} a je mu ${person.age} let. Pochází z ${person.city}.`)
//     } else {
//         console.log(`Jmenuje se ${person.name} a je jí ${person.age} let. Pochází z ${person.city}.`)
//     }
// }

// personInfo(person1)
// personInfo(person2)
// personInfo(person3)



///////// Objekty proměnné a return ///////////

// proměnné a objekty
// let firstName = "David"
// let myObject = {
//     fistName: firstName,
//     secondName: "Havelka",
//     age: 34
// }

// console.log(MyObject.firstName)

// //Objekty a return
// let firstBook = {
//     tittle: "Harry POtter a kámen mudrců",
//     auhor: "J. K. Rowlingová",
//     published: 1997
// }

// let secondBook = {
//     tittle: "Harry POtter a kámen mudrců",
//     auhor: "J. K. Rowlingová",
//     published: 1998
// }

// let bookInfo = function(book){
//     return {
//         basicInfo: `${book.title} od ${book.author}`,
//         publishing: `kniha ${book.title} byla vydána v roce ${book.published}`
//     }
// }

// let result = bookInfo(firstBook)
// console.log(result.basicInfo)
// console.log(result.publishing)



///////// Objekty proměnné a return ///////////

// let school = {
//     type: "gymnázium",
//     street: "Koninova 10",
//     city: "Prague",
//     capacity: 243,
//     open: function(){
//         console.log("škola je otevřena")
//     },
//     closed: function(){
//         return "škola je zavřena"
//     }
// }

// console.log(school.type)
// console.log(school.city)
// school.open()
// let result = school.closed()
// console.log(result)



///////// slovíčko this neboli tento ///////////

// let person1 = {
//     firstName: "David",
//     secondName: "Havelka",
//     age: 23,
//     greet: function(){
//         console.log(this.firstName)
//         console.log(this.secondName)
//         console.log(this.age)
//         console.log(`Ahoj, já jsem ${this.firstName}`)
//         console.log(this)
//     }
// }

// person1.greet()

// let person2 = {
//     firstName: "Kryštof",
//     secondName: "Kulčák",
//     age: 22,
//     greet: function(){
//         console.log(this.firstName)
//         console.log(this.secondName)
//         console.log(this.age)
//         console.log(`Ahoj, já jsem ${this.firstName}`)
//         console.log(this)
//     }
// }

// person2.greet()



///////// Password ///////////

// // První
// let password = "1234admin"

// // // druhé
// // let password = "admin123"

// // kontrola délky
// if(password.length > 13){
//     console.log("Velmi silné heslo")
// } else if (password.length >= 8 && password.length <= 13){
//     console.log("Silné heslo")
// } else {
//     console.log("SLabé heslo")
// }

// // neobsahuje 1234
// if(password.includes("1234")){
//     console.log("Heslo nesmí obsahovat 1234")
// } else {
//     console.log("Heslo je v pořádku")
// }



///////// Předpřipravené metody v číslech///////////

// // Najdu na webu : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// let number = 3.2453

// // zaokrouhlování na desetinná místa
// console.log("Zaokrouhlení na desetinné číslo")
// console.log(number.toFixed(3))

// // zaokrouhlování na celá čísla
// console.log("Zaokrouhlení na celé číslo")
// console.log(Math.round(number))
// console.log(Math.floor(number))
// // Zaokrouhlení nahoru nadtím je to dolu
// console.log(Math.ceil(number))

// // náhodné číslo
// console.log("Náhodné číslo")
// console.log(Math.random())

// // pokud chci na celé číslo tak
// console.log("Zaokrouhlení na celé číslo")
// console.log(Math.ceil(Math.random() * 10))

// // náhodné číslo z intervalu
// console.log("interval")
// let min = 15
// let max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)



///////// Úkol č.10 ///////////

// let number1 = Math.ceil(Math.random() * 6)
// let number2 = Math.ceil(Math.random() * 6)
// let number3 = Math.ceil(Math.random() * 6)
// let number4 = Math.ceil(Math.random() * 6)
// let number5 = Math.ceil(Math.random() * 6)
// let number6 = Math.ceil(Math.random() * 6)

// let sum = number1 + number2 + number3 + number4 + number5 + number6

// console.log(`Součet je : ${sum}`)

// if(sum >= 25){
//     console.log("Vítez")
// } else {
//     console.log("Zkus znovu své štěstí")
// }



///////// Konstanty (const) ///////////

// // konstanta a proměnné - znamená to, že se to měnit prostě nebude
// const firstName = "David"

// console.log(firstName)

// // konstanta a objekty
// const person = {
//     age: 34
// }

// person.age = 50



///////// Doplnění: rozdíly mezi var a let ///////////

// // Když dám za sebou dvakrát let tak mi to ukáže chybu
// let age = 30
// let age = 25

// // a když dám var tak mi to neukáže nic
// var age = 23
// var age = 42

// // chování v bloku
// if(true){
//     // let number = 5
//     // console.log(number)
//     var number = 5
// }

// console.log(number)



///////// Obarvení textu ///////////

// console.log("%c Tento text je barevný", "color: blue; font-weight: bold; background: #fff")



///////// Pole [] ///////////

// let employees = ["David", "Kryštof", "Michal"]

// // počíta se to od 0
// console.log(employees[0])
// console.log(employees[1])
// console.log(employees[2])

// let data = ["Anna", 23, true, false, 13.5]
// console.log(data[0])
// console.log(data[1])
// console.log(data[2])
// console.log(data[3])
// console.log(data[4])


// console.log("Délka pole")
// // délka pole
// console.log(employees.length)
// console.log(data.length)


// console.log("Zkouška zapsání posledního skrz length")
// // když chci zapsat třeba poslední
// console.log(data[data.length-1])



// ///////// Úkol č.11 ///////////

// let passwords = ["46133ewds", "admin255d", "DavidjeCool123"]

// let randomNumber = Math.ceil(Math.random()*3)
// console.log(randomNumber)
// let index = passwords.length - randomNumber
// console.log(index)

// console.log(passwords[index])



// ///////// Práce s polem: push, pop, unshift ///////////


// // Přepsání prvku
// let testArray = ["test1", "test2", "test3"]
// // Přepíše se test1, protože 0 je brána jako 1
// testArray[0] = "Nový prvek v poli"
// console.log(testArray)


// // Přidání posledního prvku
// let myArray = ["Jedna", "Dva", "Tři"]
// // Takto se přidává a vždy nakonec
// myArray.push("Čtyři")
// console.log(myArray)


// // Odstranění posledního prvku v poli
// myArray.pop()
// console.log(myArray)


// // Přidání prvního prvku
// myArray.unshift("Nultý")
// console.log(myArray)


// // odstranění prvního prvku
// myArray.shift()
// console.log(myArray)



// ///////// Práce s polem: splice a metody mdn ///////////

// // mdn array - properties a methods
// // odstranění z libovolné pozicce v poli 
// let mySecondArray = ["Jedna", "Dva", "Tři"]
// mySecondArray.splice(0,1)
// console.log(mySecondArray)

// let myThirdArray = ["jedna", "Dva", "Čtyři"]
// myThirdArray.splice(2,0,"Tři")
// console.log(myThirdArray)



///////// Blbnutí s polem ///////////

// let firstName = prompt("Zadejte jméno")
// console.log(firstName)

// let myArray = []
// myArray.push(prompt("Přidej jméno"))
// console.log(myArray)

// myArray.push(prompt("Přidej jméno"))
// console.log(myArray)

// myArray.push(prompt("Přidej jméno"))
// console.log(myArray)



// // Přidání na začátek zapíše se to až jako čtvrté jméno
// myArray.unshift(prompt("Přidej jmono na začátek"))
// console.log(myArray)



// /////////// Cyklus forEach - pole - Dobrá věc ///////////

// let employees = ["David", "Harry", "Hermiona", "Ron"]

// employees.forEach(function(){
//     console.log("tesujeme")
// })


// employees.forEach(function(person){
//     console.log(person)
// })


// employees.forEach(function(person, index){
//     console.log(index)
//     console.log(person)
// })

// // Když nechci, aby byl první element nultej tak k inexu dám + 1 takto:

// employees.forEach(function(person, index){
//     console.log(index + 1)
//     console.log(person)
// })

// // Když to chci zapsat normálně vedle sebe tak:

// employees.forEach(function(person, index){
//     let number = index + 1
//     console.log(`${number}. ${person}`)
// })



// /////////// Cyklus for ///////////

// // Cyklus for / ( <= ) znamená je rovno nebo menší ( i++ ) znamená, že se to zvýší o jedníčku
// for(let i = 0; i <= 5; i++){
//     console.log("Testovací text")
// }


// // Obrácený cyklus for
// for(let j = 3; j >= 0; j--){
//     console.log("Další test")
// }


// // Výpis pole pomocí cyklu for - univerzální díky length můžu přidat cokoli
// let nextEmployess = ["David", "Michal", "Kryštof"]

// for(let k = 0; k < nextEmployess.length; k++){
//     console.log(nextEmployess[k])
// }



/////////// Pole a IndexOF ///////////

// let employees = ["Sulin", "Agata", "Kukl", "Martin"]

// console.log(employees.indexOf("Sulin"))

// if(employees.indexOf("Sulin") === -1){
//     console.log("Uživatel nebyl nalezen")
// } else {
//     console.log("Uživatel byl nalezen")
// }


// // != znamená nerovná se
// if(employees.indexOf("Martin") != -1){
//     console.log("Uživatel byl nalezen")
// } else {
//     console.log("Uživatel nebyl nalezen")
// }



/////////// Pole a IndexOF ///////////

// let employees = ["Kalin", "Kuch", "Kamil", "Kacer"]

// let books = [{},{
//     title: "Harry Potter a kámen mudrců",
//     author: "J. K. Rowlingová",
//     published: 1997
// }, {
//     title: "Harry Potter a kámen mudrců",
//     author: "J. K. Rowlingová",
//     published: 1998
// }, {
//     title: "Harry Potter a kámen mudrců",
//     author: "J. K. Rowlingová",
//     published: 1999
// }]


// // // Vypsání po jednom
// // console.log(books[0].title)
// // console.log(books[0].author)
// // console.log(books[0].published)


// // indexOF negunguje to co jsem psal nad tím, což je pole objektů
// console.log(books.indexOf({}))

// let data = {
//     title: "Harry Potter a kámen mudrců",
//     author: "J. K. Rowlingová",
//     published: 1999
// }

// let data2 = data
// data2.title = "Nový title"
// console.log(data)
// console.log(data2)


// // Jak předejít IndexOF a něco vyhledat



// /////////// hledání v poli ///////////

// let books = [{
//     title: "Harry Potter a kámen mudrců", author: "J. K. Rowlingová", published: 1997
//     }, {
//     title: "Harry Potter a Tajemná komnata", author: "J. K. Rowlingová",
//     published: 1998
//     }, {
//     title: "Harry Potter a vězeň z Azkabanu", author: "J. K. Rowlingová",
//     published: 1999
//     }]

//     // find a běžné pole
//     let myArray = [1, 3, 20, 2, 8]
//     let result = myArray.find(function(oneNumber){ 
//         return oneNumber > 4
//     }) 
//     console.log(result)


//     // find a pole objektů
//     let result2 = books.find(function(oneBook){
//         if(oneBook.published === 1999){ 
//             return oneBook
//         }
//     })
//     console.log(result2.title)



// /////////// Filtrování v poli ///////////

// let books = [{
//     title: "Harry Potter a kámen mudrců", 
//     author: "J. K. Rowlingová", 
//     published: 1997
//     }, {
//     title: "Harry Potter a Tajemná komnata", 
//     author: "J. K. Rowlingová",
//     published: 1998
//     }, {
//     title: "Harry Potter a vězeň z Azkabanu", 
//     author: "J. K. Rowlingová",
//     published: 1999
//     }]

// // filtrování na běžném poli
// let names = ["Jana", "Anna", "Naděžda", "David"]
// let arrayResults = names.filter(function(oneName){
//     let weTryFind = oneName.toLowerCase().includes("na")
//         return weTryFind
// })
// console.log(arrayResults)

// // filtrování na poli objektů 1
// let arrayResults2 = books.filter(function(oneBook){
//     let weTryFind2 = oneBook.author.toLowerCase().includes("row")
//         return weTryFind2
// })

// arrayResults2.forEach(function(oneResult){ 
//     console.log(oneResult.title)
// })

// filtrování na poli objektů 2
// let arrayResults2 = books.filter(function(oneBook){

// let weTryFind2 = oneBook.author.toLowerCase().includes("row")
// let weTryFind3 = oneBook.title.toLowerCase().includes("row")
//     return weTryFind2 || weTryFind3
// })
// arrayResults2.forEach(function(oneResult){ console.log(oneResult.title)
// })




// /////////// Filtrování podle poznávací značky ///////////

// /*
// Úkol
// Svědek viděl z místa vraždy odjíždět auto. Ví jen to, že poznávací značka obsahovala 22. Vaším úkolem je v níže uvedené databázi kriminálníků najít ty, kteří mají v poznávací značce 22. Jejich veškeré údaje následně vypište do konzole. Např. takto:

// Jméno: Martin 
// Příjmení: Zelený 
// Rok narození: 1985
// atd.

// To, co hledáte (v našem případě 22), bude zadáno pomocí promptu. Použijete tedy: prompt(). Do něj zadáte 22.
// Řešení
// */

// let criminals = [{
// firstName: "Martin", 
// secondName: "Zelený", 
// birth: 1985,
// licencePlate: "85C3322",
// address: "U sloupů 16", 
// city: "České Budějovice"
// }, {
// firstName: "Jana",
// secondName: "Růžová", 
// birth: 1996, 
// licencePlate: "93K3922", 
// address: "Malská 29", 
// city: "České Budějovice"
// }, {
// firstName: "Filip", 
// secondName: "Modrý", 
// birth: 1989,
// licencePlate: "2EP6328", 
// address: "Stevardská 38", 
// city: "České Budějovice"
// }]

// let witness = prompt()

// let arrayResults = criminals.filter(function(oneSuspect){
//     let tryToFind = oneSuspect.licencePlate.toLowerCase().includes(witness)
//     return tryToFind
// })

// arrayResults.forEach(function(oneSuspect){
//     console.log(`Jméno: ${oneSuspect.firstName}`)
//     console.log(`Příjmení: ${oneSuspect.SecondName}`)
//     console.log(`Rok narození: ${oneSuspect.birth}`)
//     console.log(`Poznávací značka: ${oneSuspect.licencePlate}`)
//     console.log(`Adresa: ${oneSuspect.address}`)
//     console.log(`Město: ${oneSuspect.city}`)
//     console.log(`------------------------`)
// })



// /////////// Řazení běžného pole ///////////

// let books = [{
//     title: "Harry Potter a kámen mudrců", 
//     author: "J. K. Rowlingová", 
//     published: 1997
// }, {
//     title: "Harry Potter a vězeň z Azkabanu", 
//     author: "J. K. Rowlingová",
//     published: 1999
// }, {
//     title: "Harry Potter a Tajemná komnata", 
//     author: "J. K. Rowlingová",
//     published: 1998
// }]


// // řazení běžného pole
// let names = ["Anna", "Cecílie", "Barbora"] 
// names.sort()
// console.log(names)

// let numbers = [1, 8, 3, 2, 15, 5]
// numbers.sort()
// console.log(numbers)


// // řazení pole objektů
// let sortsArray = function(arrayBooks){
//     arrayBooks.sort(function(a, b){ 
//         if(a.title.toLowerCase() < b.title.toLowerCase()){
//             return -1
//         } else if (b.title.toLowerCase() < a.title.toLowerCase()){
//             return 1 
//         }
//         else {
//             return 0 
//         }
//     }) 
// }

// sortsArray(books) 
// console.log(books)


// // řazení pole čísel
// let sortsArray2 = function(myNumbers){
//     myNumbers.sort(function(a, b){
//         if(a < b){
//             return -1
//         } 
//         else if (b < a){
//             return 1
//         } else {
//             return 0
//         } 
//     })
// }
    
//     sortsArray2(numbers)
//     console.log(numbers)


