const timeEL=document.querySelector(".time")
let btnToggle=document.querySelector(".toggle")

function setTime(){
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    timeEL.innerHTML=`${hours}:
    ${minutes<10 ? `0${minutes}` : minutes}:
    ${seconds<10 ? `0${seconds}` : seconds}`
}

btnToggle.addEventListener("click",(e)=>{
    let html=document.querySelector('html')
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        e.target.innerHTML="โหมดกลางคืน"
    }else{
        html.classList.add("dark")
        e.target.innerHTML="โหมดกลางวัน"
    }
})
setTime()
setInterval(setTime,1000)