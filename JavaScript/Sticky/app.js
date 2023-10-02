let nav = document.querySelector(".nav")
window.addEventListener("scroll",stickyNavbar)

function stickyNavbar(){
    if(window.scrollY>nav.offsetHeight){
        nav.classList.add("active")
    }else{
        nav.classList.remove("active")
    }
}