function currentTime(){
    const date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    if (hour >= 12) hour = hour - 12
    const time = document.getElementById('time')
    time.innerHTML = `${hour}:${minute}`
    const alarmTime = document.getElementById("alarm_time")
    
    const hour1 = document.getElementById("hour"),
    minute1 = document.getElementById("minute")

    for (let i = 1; i <= 12; i++) {
        hour1.insertAdjacentHTML("beforeend",`<option value="${i}">${i}</option>`)
    }

    for (let i = 0; i <= 60; i++) {
        minute1.insertAdjacentHTML("beforeend",`<option value="${i}">${i}</option>`)
    }
    const alarmAudio = new Audio("https://www.sjap.nl/Take-off-warning.mp3")

    if (hour == hour1.value && minute == minute1.value) {
        alarmAudio.play()
        alarmAudio.loop = true
    }
}
setInterval(currentTime,60000)


    
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
