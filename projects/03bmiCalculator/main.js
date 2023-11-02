
document.getElementById("calculate").addEventListener("click",function(){
    const h = parseFloat(document.querySelector('#height').value);
    const w = parseFloat(document.querySelector('#weight').value);
    const x = (w/(h*h))
    document.getElementById("bmi1").innerHTML = x.toFixed(2);

    if (x < 18.5){
        document.getElementById("bmi2").innerHTML = "(Underweight)"
    } else if (x >= 18.5 && x<25.9) {
        document.getElementById("bmi2").innerHTML = "(Normal)"
    } else if (x >= 25.9 && x < 30) {
        document.getElementById("bmi2").innerHTML = "(Overweight)"
    } else {
        document.getElementById("bmi2").innerHTML = "(Obesity)"
    }
})



