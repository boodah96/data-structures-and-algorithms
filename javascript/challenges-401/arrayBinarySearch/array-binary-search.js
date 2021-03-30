'use strict';

function BinarySearch(arr, n) {
    let output = -1;
    let length = arr.length;
    let mid;
    let start = 0;
    let end = length - 1;
    while (start <= end) {
        console.log(start);
        mid = parseInt((end - start) / 2);
        console.log('mid', mid);
        if (n === arr[mid]) {
            output = mid;
            start = length;
        } else if (n < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }

    }
    return output;
}
console.log('index', BinarySearch([4, 8, 15], 15));