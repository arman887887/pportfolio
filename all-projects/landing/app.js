const hamburger = document.getElementById("hamburger")
const menu = document.getElementById("menu")
const closee = document.getElementById("close")

hamburger.addEventListener("click", ()=>{
    menu.classList.add("show")
    hamburger.style.display = "none"
    closee.style.display = "inline-block"
})

closee.addEventListener("click", ()=>{
     menu.classList.remove("show")
    hamburger.style.display = "inline-block"
    closee.style.display = "none"
})