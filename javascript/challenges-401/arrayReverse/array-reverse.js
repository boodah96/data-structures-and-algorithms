function reverse(arr) {

    let NewArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {

        NewArr.push(arr[i]);
    }
    return NewArr;

}
console.log([1, 2, 3, 4, 5]);
console.log(reverse([1, 2, 3, 4, 5]));