const inputBox = document.querySelector(".input-box")
const button = document.querySelector(".tip-button")
const output = document.querySelector(".output")

button.addEventListener('click', () => {
    let tip = inputBox.value * 0.15
    let ttext = `<h1> You should tip $${tip.toFixed(2)} Sir </h1>`

    output.innerHTML = ttext
})