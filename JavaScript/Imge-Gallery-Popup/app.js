let smallImg =document.querySelectorAll(".gallery img")
let fullImg = document.querySelector(".full-imge")
let modal= document.querySelector(".modal")
smallImg.forEach(img=>{
    img.addEventListener("click",()=>{
        let fullsize = img.getAttribute("alt")
        let path = `food-imge/full/${fullsize}.jpg`
        fullImg.src = path
        modal.classList.add("open")
    })
})
modal.addEventListener("click",(e)=>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open")
    }
})