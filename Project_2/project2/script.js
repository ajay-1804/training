



const navtoggle = document.querySelector('i');
const nav=document.querySelector('nav')
nav.style.display="block"
console.log(navtoggle,nav.style.display)

navtoggle.addEventListener("click",()=>{
    if(nav.style.display==="block"){
        nav.style.display="none";
    }
    else{
        nav.style.display ="block"
    }  
})

window.addEventListener("resize",()=>{
    if(innerWidth>610){
        nav.style.display ="block"
    }
})