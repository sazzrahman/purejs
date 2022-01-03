// recursion base case
// base case
// different input

function countDown(num) {

    if (num <= 0) {
        return
    }
    console.log(num)
    num--
    countDown(num)
}

function power(num, pow) {

    if (pow === 0) {
        return 1
    }
    pow--
    return num * power(num, pow)

}


function factorial(num) {
    if (num === 0) {
        return 1
    }
    num--
    return (num + 1) * factorial(num)
}



function productOfArray(arr) {
    if (arr.length === 0) {
        return 1
    }

    return arr.pop() * productOfArray(arr)

}


function recursiveRange(num) {
    if (num === 0) {
        return 0

    }
    num--
    return (num + 1) + recursiveRange(num)
}


function fib(n) {
    if (n === 1) {
        return 1
    }
    if (n === 0) {
        return 0
    }

    return fib(n - 1) + fib(n - 2)


}


console.log(fib(28))