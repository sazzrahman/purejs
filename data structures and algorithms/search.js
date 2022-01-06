// Linear Search

function linearSearch(arr, num) {
    let currentIndex = -1
    arr.forEach((item, index) => {
        if (item === num) {
            currentIndex = index
        }
    })
    return currentIndex
}



// Binary Search


function binarySearch(arr, num) {
    let left = 0
    let right = arr.length - 1
    let middle = left


    while (left < right) {


        if (arr[middle] === num) {
            right = middle
            left = middle
        }

        middle = Math.ceil((left + right) / 2)
        if (arr[middle] > num) {

            right = middle

        } else {
            left = middle
        }
    }

    if (arr[middle] == num) {
        return middle

    } else {
        return -1
    }
}


// console.log(binarySearch([1, 2, 3], 2))