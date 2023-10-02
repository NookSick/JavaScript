let progressEl = document.querySelector(".progress")
window.onscroll=()=>scrollProgress()

function scrollProgress(){
    // 0-1
    let pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrollTop = document.documentElement.scrollTop
    let scrollPercentage =(scrollTop/pageHeight)*100
    progressEl.style.visibility="visible"
    progressEl.style.width=scrollPercentage+"%"
}