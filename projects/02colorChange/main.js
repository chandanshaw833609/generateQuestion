var container = document.getElementById("container"),
green = document.getElementById('green'),
yellow = document.getElementById('yellow'),
blue = document.getElementById('blue'),
red = document.getElementById('red');


green.addEventListener("click", function(){
    document.getElementById("container").style.backgroundColor = "green";
})

yellow.addEventListener("click", function(){
    document.getElementById("container").style.backgroundColor = "yellow";
})

blue.addEventListener("click", function(){
    document.getElementById("container").style.backgroundColor = "blue";
})

red.addEventListener("click", function(){
    document.getElementById("container").style.backgroundColor = "red";
})
