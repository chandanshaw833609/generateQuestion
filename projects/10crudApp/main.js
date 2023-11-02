const container = document.querySelector(".container")
const saveBtn = document.getElementById('save_btn')
const writeInMe = document.querySelector('.writeinme')
const deleteBtn = document.getElementById('delete_btn')
function insertElement() {
    let div = document.createElement('div')
    div.classList.add("div_style")
    div.innerHTML = `<p class="writeinme">${writeInMe.value}</p>
    <button id="delete_btn" onClick ="editElement(this)">Edit</button>
    <button id="delete_btn" onClick ="deleteElement(this)">Delete</button>`

    container.appendChild(div)

    console.log(writeInMe.value);
}

function deleteElement(currentElement) {
    currentElement.parentElement.remove()
}

function editElement(currentElement) {
    if (currentElement.textContent == "Edit") {
        currentElement.textContent = "Done"
        const input = document.createElement('input')
        input.classList.add('writeinme')
        input.value = currentElement.previousElementSibling.textContent
        currentElement.parentElement.replaceChild(input,currentElement.previousElementSibling)
    } else {
        const para = document.createElement('p')
        currentElement.textContent = "Edit"
        para.classList.add('writeinme')
        para.textContent = currentElement.previousElementSibling.value
        currentElement.parentElement.replaceChild(para,currentElement.previousElementSibling)
    }
    
}
saveBtn.addEventListener('click',insertElement)


