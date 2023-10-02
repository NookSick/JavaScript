let scrollBtn =document.querySelector(".top")
let rootEl =document.documentElement
document.addEventListener("scroll",showBtn)
scrollBtn.addEventListener("click",scrollToTop)
function showBtn(){
    let scrollTotal = rootEl.scrollHeight - rootEl.clientHeight
    if(rootEl.scrollTop/scrollTotal>0.3){
        scrollBtn.classList.add("show-btn")
    }else{
        scrollBtn.classList.remove("show-btn")
    }
}
function scrollToTop(){
    rootEl.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
