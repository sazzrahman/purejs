// const icon = document.querySelector('.icon')
const items = document.querySelectorAll('.item')


items.forEach((item) => {
    item.addEventListener('click', () => {
        handleClick(item)

    })

})

function handleClick(item) {
    if (item.classList.contains('open')) {
        item.classList.remove('open')

    } else {
        item.classList.add('open')
    }

}