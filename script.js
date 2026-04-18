const container = document.querySelector("#layout")
const buttons = document.querySelectorAll("button")
const result = document.querySelector(".spanResult")
const body = document.body
const begginer = document.createElement("div")
    begginer.classList.add("begginer")
const initialButton = document.createElement("input")
    initialButton.classList.add("initialButton")
    initialButton.setAttribute("type", "button")
    initialButton.value = "Initiate"

let value1 = 0

function add (a, b){
    return a + b
}

function sub (a, b){
    return a - b
}

function multiply (a, b){
    return a * b
}

function div (a, b){
    return a / b
}

function start (){
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.addEventListener('keydown', () => {
                if(btn.key === 'Enter' && btn.textContent != "+" && btn.textContent != "-" && btn.textContent != "/" && btn.textContent != "*"){
                    value1 = btn.textContent
                    result.textContent += value1
                    value1 = Number(value1)
                }else{}
            })
        })
    })
}

function rm(a){
    a.remove()
    start()
}

function beggining(){
    begginer.appendChild(initialButton)
    document.body.prepend(begginer)

    initialButton.addEventListener('click', () => rm(begginer))
}

beggining()