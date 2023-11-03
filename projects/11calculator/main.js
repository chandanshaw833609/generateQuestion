const btnCss = document.querySelectorAll(".btn_css")
const written_value = document.querySelector("#written_value")
const calculated_value = document.querySelector("#calculated_value")

for (let i = 0; i < 20; i++) {
    btnCss[i].addEventListener('click', function() {
        written_value.textContent  = written_value.textContent + btnCss[i].value
    })
}

function calculatedValue () {
    const calValue = eval(written_value.textContent)
    calculated_value.textContent = calValue
}

function deleteLastDigit() {
    let w_value = written_value.textContent
    let c_value = calculated_value.textContent
    written_value.textContent =  w_value.substring(0,w_value.length-1)
    if (w_value == "") calculated_value.textContent = c_value.substring(0,c_value.length-1)
}

function allClear () {
    written_value.textContent = ""
    calculated_value.textContent = ""
}

function bracket() {
    let value = written_value.textContent
    let pbfb 
    // pbfb = position before first bracket "("
    
    for (let i  = value.length; i>=0; i--) {
        if (value[i] == "(") {
            written_value.textContent = value + ")"
            pbfb = i-1
            console.log(pbfb);
            if ((value[pbfb] != "*" || value[pbfb] != "/" || value[pbfb] != "+" || value[pbfb] != "-") && pbfb !=-1 ) {
                written_value.textContent = written_value.textContent.substring(0,pbfb+1) + "*" + written_value.textContent.substring(pbfb+1,written_value.textContent.length)
            }
            break
        } 
        else if (value[i] == ")" || !value.includes("(")) {
            written_value.textContent = value + "("
            break
        } else if (value.length == 0) {
            written_value.textContent = "("
        }
    }

}



