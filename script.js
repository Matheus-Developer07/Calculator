const container = document.querySelector("#layout")
const buttons = document.querySelectorAll("#layout .button")
const result = document.querySelector(".spanResult")
const body = document.body
const backspace = document.querySelector("#backspace")

const begginer = document.createElement("div")
begginer.classList.add("begginer")

const initialButton = document.createElement("input")
initialButton.classList.add("initialButton")
initialButton.setAttribute("type", "button")
initialButton.value = "Initiate"

let value1 = ""
let operator = ""
let value2 = ""

function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function div(a, b) {
    return a / b
}

function calculator(){
    let rst = 0
    if(operator == "+"){
        rst = add(Number(value1), Number(value2))
    }else if(operator == "-"){
        rst = sub(Number(value1), Number(value2))
    }else if(operator == "*"){
        rst = multiply(Number(value1), Number(value2))
    }else if(operator == "/"){
        rst = div(Number(value1), Number(value2))
    }else{}

    result.textContent = rst
}

function enter() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            value1 = Number(value1)
            value2 = Number(value2)
            calculator()
        }
    })
}

function start() {
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if(!isNaN(btn.textContent)){
                if(operator == ""){
                    value1 = value1 + btn.textContent
                    result.textContent = value1
                }else{
                    value2 = value2 + btn.textContent
                    result.textContent = value2
                }
            }else{
                if(btn.textContent == "+" || btn.textContent == "-" || btn.textContent == "/" || btn.textContent == "*"){
                    operator = btn.textContent
                    result.textContent = operator
                }else if(btn.textContent == "="){
                    value1 = Number(value1)
                    value2 = Number(value2)
                calculator()
                }
            }
        })
    })
    backspace.addEventListener('click', () => {
        if (operator === "") {
            value1 = value1.slice(0, -1)
                result.textContent = value1
        } else {
            value2 = value2.slice(0, -1)
            result.textContent = value2
        }
    }) 
    enter()
}

function rm(a) {
    a.remove()
    start()
}

function beggining() {
    begginer.appendChild(initialButton)
    document.body.prepend(begginer)

    initialButton.addEventListener('click', () => rm(begginer))
}

beggining()