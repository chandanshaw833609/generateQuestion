
const num = document.getElementById("number")
const char = document.getElementById("character")


document.getElementById("passGen").addEventListener('click', () => {
    const len = document.getElementById("length")
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num.checked) str += '0123456789'
    if (char.checked) str += '!@#$%^&*(){}?<>'
    for (let i = 1; i <= len.value; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    }
    
    inputPass = document.getElementById("password")
    inputPass.value = pass
})

document.getElementById("copy").addEventListener('click', () => {
    inputPass = document.getElementById("password")
    window.navigator.clipboard.writeText (inputPass.value)
    inputPass.style.backgroundColor = "skyblue"
})



