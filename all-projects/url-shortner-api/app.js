let ham = document.querySelector(".ham")
let navmenu = document.querySelector(".nav-menu")
ham.addEventListener("click", ()=>{
    if (navmenu.style.left == "150%") {
        navmenu.style.left = "50%"
    }
    else{
        navmenu.style.left = "150%"
    }
})





// shorten link
let formm = document.getElementsByTagName("form")[0]
let input = document.getElementsByTagName("input")[0]
let short = document.querySelector(".short")
let msgbox = document.querySelector("#msgbox")
let load = document.querySelector("#load")


formm.addEventListener("submit", (e)=>{
    e.preventDefault()
    let url = input.value
    shortnenUrl(url)
    
    if(input.value == ""){
        msgbox.classList.add("msg")
        msgbox.innerText = "Please Add A Link"
        load.innerText = ""
    }
    else{
        msgbox.remove()
    }
})


const shortnenUrl = async(url)=>{
      load.innerText = "LOADING...." // showing loading

      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      const data = await response.json()
      console.log(data)

      const div = document.createElement("div")
      div.classList.add("shorten-box")
      div.innerHTML = `
                <div class="box-1">
                    <p>${url}</p>
                </div>
                <div class="box-2">
                    <span>${data.result.full_short_link}</span>
                    <button class="btn copyBtn">Copy</button>
                    <button class="delete">Delete</button>
                </div>
      `
      short.append(div)

      load.remove() // reemove loading when api accessed

      let copyBtn = div.querySelector(".copyBtn")
      let spann = div.querySelector("span")

      copyBtn.addEventListener("click", ()=>{
        navigator.clipboard.writeText(spann.textContent)

        if(copyBtn.textContent == "Copy"){
            copyBtn.textContent = "Copied"
            copyBtn.style.backgroundColor = "hsl(257, 27%, 26%)"
        }
      })



      let delte = div.querySelector(".delete")
      delte.addEventListener("click", ()=>{
          div.remove()
      })

      input.value = ""

}


