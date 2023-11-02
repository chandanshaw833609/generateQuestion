let hour1 = document.getElementById("hourInput"),
minute1 = document.getElementById("minInput"),
sec1 = document.getElementById("secInput")
function currentTime(){
    const date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let sec = date.getSeconds()
    if (hour >= 12) hour = hour - 12
    if (hour < 10) hour = "0" + hour
    if (minute < 10) minute = "0" + minute
    if (sec<10) sec = "0" + sec
    const time = document.getElementById('time')
    time.innerHTML = `${hour}:${minute}:${sec}`
    const alarmTime = document.getElementById("alarm_time")
    const alarmAudio = new Audio("https://www.sjap.nl/Take-off-warning.mp3")

    if (hour == hour1.value && minute == minute1.value && sec == sec1.value) {
        alarmAudio.play()
        alarmAudio.loop = true
    }
}
setInterval(currentTime,1000)


function setAlarm (currentElement) {
    const heading = document.createElement('h1')
    heading.classList.add('alarm_css')
    heading.innerText = `${hour1.value}:${minute1.value}:${sec1.value}`
    currentElement.parentElement.replaceChild(heading,currentElement.previousElementSibling)
    const alarm_btn = document.getElementById('set_alarm')
    alarm_btn.setAttribute('disabled', '')
}
// setInterval(
//     function currentTime () {
//         const date = new Date()
//         let hour = date.getHours(),
//         minute = date.getMinutes(),
//         sec = date.getSeconds()
    
        // if (hour >= 12) hour = hour - 12
        // if (hour < 10) hour = "0" + hour
        // if (minute < 10) minute = "0" + minute
        // if (sec < 10) sec = "0" + sec
     
//         const container = document.querySelector(".container")
//         container.innerHTML = `<h1 id="time">${hour}:${minute}:${sec}</h1>`
//     },1000)
