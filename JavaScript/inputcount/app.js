let count = document.querySelector(".count")
let input = document.querySelector("input")

input.addEventListener("keyup",()=>{
    count.innerHTML=input.value.length
})