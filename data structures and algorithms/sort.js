//  Bubble Sort Naive Solution

function bubbleSort(arr) {

    for (j = 0; j < arr.length; j++) {
        for (i = 0; i < arr.length - 1; i++) {
            idx1 = i
            idx2 = i + 1

            if (arr[idx2] < arr[idx1]) {
                arr = swap(arr, idx1, idx2)
            }

        }

    }
    return arr
}


function swap(arr, idx1, idx2) {

    var item1 = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = item1
    return arr

}

// console.log(swap([99, 2, 5, 81], 0, 1))
console.log(bubbleSort([99, 2, 5, 81]))