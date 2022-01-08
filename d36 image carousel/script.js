const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const imageContainer = document.querySelector('.image-container')

const images = document.querySelectorAll('.image')




let currentImage = 0

function changeImage(n) {

    currentImage += n

    if (currentImage > images.length - 1) {
        currentImage = 0
    }

    if (currentImage < 0) {
        currentImage = images.length - 1
    }

}



rightBtn.addEventListener('click', () => {

    changeImage(1)

    position = currentImage * 500
    console.log(currentImage, position)
    imageContainer.style.transform = `translate(${-position}px)`

})

leftBtn.addEventListener('click', () => {

    changeImage(-1)
    position = currentImage * 500
    console.log(currentImage, position)
    imageContainer.style.transform = `translate(${-position}px)`

})


let interval = setInterval(run, 2000)

function run() {
    changeImage(1)
    console.log(currentImage)
    position = currentImage * 500
    console.log(currentImage, position)
    imageContainer.style.transform = `translate(${-position}px)`
}