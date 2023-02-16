const form = document.getElementById("form")
const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")
const email = document.getElementById("email")
const text = document.getElementById("text")
const phone = document.getElementById("phone")


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const firstvalue = firstname.value
    const lastvalue = lastname.value
    const emailvalue = email.value
    const textvalue = text.value
    const phonevalue = phone.value

    
    if(firstvalue == ""){
        addErrorTo( 0, "First Name is required")
    
    }else{
        removeError(0)
    }
    if(lastvalue == ""){
        addErrorTo( 1, "Last Name is required")
    
    }else{
        removeError(1)
    }
    if(phonevalue == ""){
        addErrorTo( 2, "Phone Number is required")
    
    }else{
        removeError(2)
    }
    if(!isValid(emailvalue)){
        addErrorTo( 3, "Email Address is Not Valid")
    
    }else{
        removeError(3)
    }
    if(textvalue == ""){
        addErrorTo( 4, "Text is required")
    
    }else{
        removeError(4)
    }
    
})

const addErrorTo = (nmbr, message)=>{
    const logo = document.querySelector("#form").getElementsByTagName("img")[nmbr]
    const smalll = document.querySelector("#form").getElementsByTagName("small")[nmbr]
    smalll.innerText = message
    smalll.style.opacity = 1
    logo.style.opacity = 1
}

const removeError = (nmbr)=>{
    const logo = document.querySelector("#form").getElementsByTagName("img")[nmbr]
    const smalll = document.querySelector("#form").getElementsByTagName("small")[nmbr]
    smalll.style.opacity = 0
    logo.style.opacity = 0
}

const isValid = (emailvalue) => {
    return String(emailvalue)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
