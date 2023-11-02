const start = document.getElementById('start'),
stop = document.getElementById("stop");

function randomColor() {
    const hex = '0123456789ABCDEF'
    var color = '#'
    for (let i=0; i<6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalId
const changeBgColor = function(){
    if (intervalId == null) {
        intervalId = setInterval(randomBgColor,1000)
    }
    function randomBgColor(){
        document.body.style.backgroundColor = randomColor();
    } 
}

const stopChangingColor = function(){
    clearInterval (intervalId)
    intervalId = null
}
start.addEventListener('click', changeBgColor);
stop.addEventListener('click', stopChangingColor);
