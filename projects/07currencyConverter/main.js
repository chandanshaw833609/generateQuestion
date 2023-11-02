const inputCurrencyType = document.querySelector('.inputCurrencyType')
const outputCurrencyType = document.querySelector('.outputCurrencyType')
    
fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
.then((res) => res.json())
.then((data) => {
    const keys = (Object.keys(data));
    for (let i = 1; i < keys.length; i++) {
        const markup = `<option value=${keys[i]}>${keys[i]}</option>`
        inputCurrencyType.insertAdjacentHTML("beforeend", markup) 
        outputCurrencyType.insertAdjacentHTML("beforeend", markup) 
    }
})
.catch((error) => {
    console.log(error);
})



const convert = () => {
    inputAmount = document.getElementById("inputAmount").value
    outputAmount = document.getElementById("outputAmount")
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${inputCurrencyType.value}.json`)
    .then((res) => res.json())
    .then((data) => {
        outputAmount.value = inputAmount*data[inputCurrencyType.value][outputCurrencyType.value]
    }) 
}


const swapInOut = () => {
    temp = inputCurrencyType.value
    inputCurrencyType.value = outputCurrencyType.value
    outputCurrencyType.value = temp
}