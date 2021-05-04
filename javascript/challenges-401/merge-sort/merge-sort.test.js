'use strict';

function mergeSort(arr) {
    let n = arr.length;
    if (n <= 1) return arr;
    let mid = Math.floor(n / 2);
    let left = arr.splice(0, mid);
    let right = arr;

}

test('run', () => {
    mergeSort([12]);
    expect('ll').toBeString;

})