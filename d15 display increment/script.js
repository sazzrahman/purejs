const counters = document.querySelectorAll('.counter-num')


counters.forEach(counter => {

    counter.innerText = '0'
    const updateCounter = () => {

        let target = +counter.getAttribute('target')
        let increment = target / 100
        let c = +counter.innerText

        if (c < target) {
            counter.innerText = Math.ceil(c + increment)
            setTimeout(updateCounter, 3)

        }
    }
    updateCounter()


})