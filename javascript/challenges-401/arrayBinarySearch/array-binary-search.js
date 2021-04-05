'use strict';

module.exports = function BinarySearch(arr, n) {
    let output = -1;
    let length = arr.length;
    let mid;
    let start = 0;
    let end = length - 1;
    while (start <= end) {
        mid = parseInt(start + (end - start) / 2);
        if (n === arr[mid]) {
            output = mid;
            break;
        } else if (n < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }

    }
    return output;
}