const switchh = document.getElementById("customSwitches")
const h1 = document.querySelectorAll("h1")
switchh.addEventListener("change", ()=>{
      basic("$19.99", "$199.99")
      professional("$24.99", "$249.99")
      master("$39.99", "$399.99")
})

const basic = (monthly, annually)=>{
    if (switchh.checked) {
        h1[0].innerText = monthly
      }
      else{
        h1[0].innerText = annually
      }
}
const professional = (monthly, annually)=>{
    if (switchh.checked) {
        h1[1].innerText = monthly
      }
      else{
        h1[1].innerText = annually
      }
}
const master = (monthly, annually)=>{
    if (switchh.checked) {
        h1[2].innerText = monthly
      }
      else{
        h1[2].innerText = annually
      }
}
