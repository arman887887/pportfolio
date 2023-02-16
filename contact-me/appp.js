const ham = document.querySelector(".ham")
const closee = document.querySelector(".close")
const navul = document.querySelector(".nav-ul")

ham.addEventListener("click", ()=>{
    if(navul.style.left == "150%"){
        navul.style.left = "50%"
        ham.style.display = "none"
        closee.style.display = "inline-block"
    }
    else{
        navul.style.left = "150%"
       
    }
})

closee.addEventListener("click", ()=>{
  if(navul.style.left == "50%"){
      navul.style.left = "150%"
      closee.style.display = "none"
      ham.style.display = "inline-block"
  }
})


