let btn = document.querySelector(".btn")
let container = document.querySelector(".container")
let messages=[
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g"
]
btn.addEventListener("click",()=>createNotification())

function createNotification(){
    let notificationEl = document.createElement("div")
    notificationEl.classList.add("notification")
    notificationEl.innerText=randomMessage()
    container.appendChild(notificationEl)
    setTimeout(()=>{
        notificationEl.remove()
    },3000)
}

 function randomMessage(){
    return messages[Math.floor(Math.random()*messages.length)]
 }