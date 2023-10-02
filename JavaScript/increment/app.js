let counters=document.querySelectorAll(".counter")
counters.forEach(counter=>{
    counter.innerText='0'
    let updeteCounter=()=>{
        let target = +counter.getAttribute("data-target")
        let start =+counter.innerText
        let increment = target/200
        if(start<target){
            counter.innerText = `${Math.ceil(start+increment)}`
            setTimeout(updeteCounter,30)
        }else{
            counter.innerText=target
        }
    }
    updeteCounter()
})