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

function adjustForm (a){
    return Number(a).toExponential(10)
}

function adjustFont() {
    const length = result.textContent.length

    if(length > 22){
        result.textContent = Number(result.textContent).toExponential(10) 
    }else if(length > 17){
        result.style.fontSize = "2vw"
    }else if (length > 10) {
        result.style.fontSize = "3vw"
    } else if (length > 5) {
        result.style.fontSize = "4vw"
    } else {
        result.style.fontSize = "5vw"
    }
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
    adjustFont()

    value1 = String(rst)
    value2 = ""
    operator = ""
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
                    adjustFont()
                }else{
                    value2 = value2 + btn.textContent
                    result.textContent = value2
                    adjustFont()
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
        if (value2 !== "") {
            value2 = value2.slice(0, -1)
            result.textContent = value2
        } else if (operator !== "") {
            operator = ""
            result.textContent = value1
        } else {
            value1 = value1.slice(0, -1)
            result.textContent = value1
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