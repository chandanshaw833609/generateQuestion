const btnCss = document.querySelectorAll(".btn_css")
const written_value = document.querySelector("#written_value")
const calculated_value = document.querySelector("#calculated_value")
let openBracket = 0
console.log(openBracket + " openBracket");

for (let i = 0; i < btnCss.length; i++) {
    btnCss[i].addEventListener('click', function() {
        written_value.textContent  = written_value.textContent + btnCss[i].value
    })
}

function calculatedValue () {
    try {
        let operations = "*/-+"
    
        for (let i=0; i<=written_value.textContent.length; i++) {

            if (written_value.textContent[i] === "(" && !operations.includes(written_value.textContent[i-1]) && i!=0 && written_value.textContent[i-1] !=="(") {
                written_value.textContent = written_value.textContent.substring(0,i) + "*" + written_value.textContent.substring(i,written_value.textContent.length)
            }

            if (openBracket > 0) {
                written_value.textContent = written_value.textContent + ")"
                openBracket--;
            }
        }
    const calValue = eval(written_value.textContent).toFixed(3)
    calculated_value.textContent = calValue
    } catch (error) {
        calculated_value.textContent = "Syntax Error"
    }
    
}

function deleteLastDigit() {
    let w_value = written_value.textContent
    let c_value = calculated_value.textContent
    if (written_value.textContent[written_value.textContent.length-1] === "(") openBracket--;
    written_value.textContent =  w_value.substring(0,w_value.length-1)
    if (w_value == "") calculated_value.textContent = c_value.substring(0,c_value.length-1)
}

function allClear () {
    written_value.textContent = ""
    calculated_value.textContent = ""
    openBracket = 0
}

function bracket() {
    let value = written_value.textContent
    
    for (let i  = value.length; i>=0; i--) {
        let numbers = "0123456789"
        
        if (value[i] =="*" || value[i] =="/" || value[i] =="+" || value[i] =="-") {
            written_value.textContent = value + "("
            openBracket += 1
            break
        }
        else if (value[i] ===")" && openBracket == 0) {
            written_value.textContent = value + "("
            openBracket += 1
            break
        }
        else if (numbers.includes(value[i]) && openBracket == 0) {
            written_value.textContent = value + "("
            openBracket += 1
            break
        } else if (openBracket > 0 && numbers.includes(value[i])) {
            written_value.textContent = value + ")"
            openBracket --;
            break
        } else if (written_value.textContent.length == 0) {
            written_value.textContent = "("
            openBracket = 1
        } 
    }
    

}



