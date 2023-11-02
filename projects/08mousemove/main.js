const rec = document.querySelector("#rectangle")

rec.addEventListener('mousemove', function(details) {
    const rectPos = rec.getBoundingClientRect()
    const pointerLocation = parseInt(details.clientX-rectPos.left);
    if (pointerLocation < rectPos.width/2){
        const redColor = gsap.utils.mapRange(0,rectPos.width/2,255,0,pointerLocation)
        rec.style.backgroundColor = `rgb(${redColor},0,0)`
    } else {
        const blueColor = gsap.utils.mapRange(rectPos.width/2, rectPos.width, 0, 255, pointerLocation)
        rec.style.backgroundColor = ` rgb(0, 0, ${blueColor})`
    }
})

rec.addEventListener("mouseout", function () {
    gsap.to(rec, {
        backgroundColor: "white"
    })
})