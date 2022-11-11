const result = document.querySelector(".user-list")
const input = document.querySelector(".input-filter")
const usersList = []

getData()

input.addEventListener("input", function(e){
    dataFilter(e.target.value)
})

async function getData(){
    // fatch je stáhni všechny ty lidi z randomuser
    // Await je, že počkej než se to vše stáhne a potom to ulož. Prostě je to něco jako 
    const allUsers = await fetch("https://randomuser.me/api?results=50")

    // Převede to do smysluplnější podoby
    const data = await allUsers.json()
    console.log(data)


    // Vyčistí seznam uživatelů v HTML
    result.innerHTML = ""


    // Každého uživatele přidáme do seznamu ul
    // data.results.forEach(function(user){ kód })
    // Novejší je ten dóle
    data.results.forEach(user => {
    const li = document.createElement("li")
    li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">

        <div class="user-information">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
    `

    result.appendChild(li)

    usersList.push(li) // budu potřebovat až dále

    })
}

function dataFilter(inputText){
    usersList.forEach(oneUser => {
        if(oneUser.innerHTML.toLowerCase().includes(inputText.toLowerCase())){
            oneUser.classList.remove("hide")
        } else {
            oneUser.classList.add("hide")
        }
    })
}
