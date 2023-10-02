let container = document.getElementById("container")
let getCountries=async()=>{
    let url ='https://restcountries.com/v2/all'
    let res = await fetch(url)
    let items = await res.json()
    items.forEach(element => {
        createCard(element)
    });
}
let createCard=(data)=>{
    let cardEl =document.createElement("div")
    cardEl.classList.add("country")
    let contentHTML=`
        <div class="img-container">
            <img src="${data.flag}"/>
        </div>
        <div class=:"info">
            <h3 class="name">${data.name}</h3>
            <small>เมืองหลวง : <span>${data.capital}</span></small>
        </div>
    `
    cardEl.innerHTML=contentHTML
    container.appendChild(cardEl)
}

getCountries()