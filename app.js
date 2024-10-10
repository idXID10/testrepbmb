const body = document.querySelector("body")

const div = document.createElement("div")
const btn1 = document.createElement("button")
const imp = document.createElement("input")
const val1 = document.createTextNode("make")
const ul = document.createElement("ul")
body.appendChild(div)

div.appendChild(imp)
div.appendChild(btn1)
div.appendChild(ul)

div.style.width = "500px"
div.style.height = "500px"
div.style.border = "1px solid black"
div.style.textAlign = "center"

imp.setAttribute("id", "impval")

btn1.appendChild(val1)
btn1.setAttribute("onclick", "addP()")

function addP(){
    let newPar = document.createElement("li")
    let newBtn = document.createElement("button")
    newPar.textContent = document.getElementById("impval").value

    ul.appendChild(newPar)
    newPar.setAttribute("id", "listPos")

    ul.appendChild(newBtn)
    newBtn.textContent = "Delete"
    
newBtn.addEventListener("click",
    function(){
div.removeChild("listPos")
});
}
