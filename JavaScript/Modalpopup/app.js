let openBtn=document.querySelector(".open-btn")
let closeBtn=document.querySelector(".close-btn")
let modalContainer =document.querySelector(".modal-container")

openBtn.addEventListener("click",()=>{
    modalContainer.classList.add("show")
})
closeBtn.addEventListener("click",()=>{
    modalContainer.classList.remove("show")
})