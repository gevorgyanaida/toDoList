let divList = document.getElementById("div-list")
let input = document.getElementById("myInput")
let addBtn = document.getElementById("addBtn")

addBtn.addEventListener("click", addListEl)

function addListEl(){
    if(input.value){
        let checkbox = document.createElement('input')
        let span = document.createElement('span')
        let text = document.createTextNode("\u00D7")
        let elDiv = document.createElement('div')
        span.append(text)
        span.className = "close"
        checkbox.type = "checkbox"
        elDiv.classList.add('el')
        elDiv.append(checkbox)
        elDiv.append(input.value)
        input.value = ""
        elDiv.append(span)
        divList.prepend(elDiv)
        checkbox.addEventListener("click", function(){
            elDiv.classList.toggle('checked')
        })
        span.addEventListener("click", function(){
            elDiv.remove()
        })
    } else {
        alert('You should write your task down first')
    }
}
