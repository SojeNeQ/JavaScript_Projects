// /* ******** Kratší verze (šipková notace) ********* */

/* // Dlouhá vezre
const square = function(num){
    return num * num
}
*/


/* // Kratší verze
const square = (num) => {
    return num * num
}
*/


/* // Ještě kratší verze
const square = (num) => num * num
console.log(square(5))


const sum =(num1, num2) => num1 + num2
console.log(sum(5,8))
*/


// /* ******** Kratší verze (šipková notace v poli (filter, find) ********* */

// const people = [{
//     name: "David",
//     age: 23
// }, {
//     name: "Kryštof",
//     age: 15
// }, {
//     name: "Míša",
//     age: 20
// }]

// // Dlouhý
// const less20 = people.filter(function(onePerson){
//     return onePerson.age < 20
// })

// // Kratší
// const less20 = people.filter((onePerson) => onePerson.age < 20)
// console.log(less20)

// // Když napíšu takto:
// const less20 = people.find((onePerson) => onePerson.age < 20)
// // tak mi to vyhledá jen prvního na kterého to narazí, takže lepší je dávat filter


// /* ******** Ternární operátor ********* */

// // 1. příklad
// const age = 20
// let notification

// // Rychlejší zápis na jedn řádek
// age >= 18 ? notification = "Můžes vstoupit" : notification = "Nemůžes vstoupit"

// // Ještě kratší můžu to dát rovnou k tomu let 
// notification = age >= 18 ? "Můžes vstoupit" : "Nemůžes vstoupit"

// // // Základní zápis
// // if (age >= 18){
// //     notification = "Můžeš vstoupit"
// // } else {
// //     notifiaction = "Nemůžes vstoupit"
// // }



// // 2. příklad
// const myAge = 19

// const letHimGo = () => {
//     console.log("Můžes jít dovnitř")
// }

// const noLetHimGo = () => {
//     console.log("Nemůžes vstoupit")
// }

// // Rychlejší zápis
// myAge >= 18 ? letHimGo() : noLetHimGo()



// /* ******** Falsy a Truthy ********* */

// // Falsy - false, 0, prádzný string(řetězec či toto : ""), null, undefined , NaN
// // Truthy - 


// const products = []
// const product = products[0]

// console.log(product)

// if(product){
//     console.log("Produkt byl nalezen")
// } else {
//     console.log("Produkt nebyl nalezen")
// }


// /* ******** Převod a porovnání datových typů ********* */

// // Corecion
// console.log("5" + 5)
// console.log(5 + 5)
// console.log("5" - 5)


// const result1 = "5" + 5
// const result2 = "5" - 5
// // Vyzjištění co jestli to je number nebo string atd...
// console.log(typeof result1)
// console.log(typeof result2)



// /* ******** Vlastní chybové hlášky, chytání chyb (throw, try a catch) ********* */

// // Tohle vše by se mělo používat pospolu

// const myTaxes = (income) => {
//     // === tam jsou aby se rovnaly i dotavé typy
//     if (typeof income === "number"){
//         return income * 0.25
//     } else {
//         // Vyhazování chyby / Error mi dává více informací
//         throw Error("Argument musí být číslo")
//     }
// }


// // Znamená to, že do try něco vpustím či něco vyzkouším a když je to vpohodě tak pokračuje dálě, jakmile to hodí chybu tak to začne řešit chatch
// try {
//     const result = myTaxes(true)
//     console.log(result)
// } catch (a) {
//     // Jakmile ten řádek nad vyhodí chybu tak nepokračuje na console.log, ale sem
//     console.log("Pozor máš tam chybu")
// }




// /* ******** Vlastní chybové hlášky, chytání chyb (catch a try v praxi) ********* */


// // Jak obejít chybu (musim zakomentovat localStorage)
// localStorage.setItem("age", 30)

// let myAge = localStorage.getItem("age")

// try {
//     console.log(JSON.parse(myAge))
// } catch (e) {
//     console.log("Chyba")
// }

// console.log("Pokračuj dál")



// /* ******** Použití strick modu (use strick) ********* */

// // Je to něco co mi nedovolí udělat věci, které nejsou logické prostě mě to více hlídá

// // To use strict ukáže Error když třeba v tom data nemám ještě přidané let

// "use strict"

// // global scope

// // let data 

// const ourTest = () => {
//     // local scope
//     data = "abcdfg"
// }

// ourTest()
// console.log(data)


// /* ******** Cyklus While a do while ********* */

// // forEach - prochází pole
// // for - známe počet opakování
// // while - dokud - nemusí se provést ani jednou
// // do while - provede se vždy minimálně jednou

// let i = 0
// let o = 0

// // // vypíše to 0 - 9
// // while(i < 10){
// //     console.log(i)
// //     i = i + 1
// //     // zapsání zkraceně mohu í++ místo i = i + 1
// // }

// // vypíše to také 0 - 9
// do {
//     console.log(o)
//     o++
// } while (o < 10)



// /* ******** Cyklus While a do while (použití v praxi) ********* */

// "use strict"

// let result

// // Dělá to pořád dokola dokud tam nebude napsané to X
// while (result != "x"){
//     result =prompt("Pokud chceš ukončit hru, tak zdej X")
//     console.log(result)
// }