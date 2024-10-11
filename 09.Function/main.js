const arr1 = [21,33,21,21,18,24,22,23,18,23,18,33,43]
const arr2 = [20,34,17,17,18,24,22,23,18,23,18,33,43]

// Tasks

// 1.
function sum(a, b) {
    return a + b
}
console.log(21 + 33);

// 2.
function mult(xy) {
    const result = xy.reduce((acc,item) => acc * item,1)
    return Math.round(result)
}
console.log(mult(arr1));

