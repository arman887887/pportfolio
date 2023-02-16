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


//form validation
let form = document.querySelector("form")
let email = document.querySelector("input")
let err = document.querySelector(".error")
let emp = document.querySelector(".empty")
let valid = document.querySelector(".valid")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let emailValue = email.value
    if(emailValue == ""){
        emp.style.display = "block"
        valid.style.display = "none"
        err.style.display = "none"
    }
    else if(!emailValue == "" && !validateEmail(emailValue)){
        err.style.display = "block"
        emp.style.display = "none"
        valid.style.display = "none"
    }
    else if(!emailValue == "" && validateEmail(emailValue)){
        err.style.display = "none"
        emp.style.display = "none"
        valid.style.display = "block"
    }
})



const validateEmail = (emailValue) => {
    return String(emailValue)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };



   // swipper from internet chori karke
 var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });