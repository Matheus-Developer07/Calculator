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
        rst = add(value1, value2)
    }else if(operator == "-"){
        rst = sub(value1, value2)
    }else if(operator == "*"){
        rst = multiply(value1, value2)
    }else if(operator == "/"){
        rst = div(value1, value2)
    }else{}

    result.innerHTML = rst
}

function enter3(){
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            value2 = Number(value2)
            result.textContent = value2
            calculator()
        }

    })
}

function funValue2(){
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if(!isNaN(btn.textContent)){
                value2 = value2 + btn.textContent
            }
        })
    })
    enter3()
}

function enter2() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            result.textContent = operator
        }
    })
    funValue2()
}

function funOperator(){
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if(isNaN(btn.textContent)){
                operator = btn.textContent
            }
        })
    })
    enter2()
}

function enter() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            value1 = Number(value1)
            result.textContent = value1
            funOperator()
        }

    })
}

function start() {
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if(!isNaN(btn.textContent)){
                value1 = value1 + btn.textContent
            }
        })
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