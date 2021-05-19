'use strict';

function quickSort(arr, left, right) {
    if (left < right) {
        let position = partition(arr, left, right);
        quickSort(arr, left, position - 1);
        quickSort(arr, position + 1, right);

    }
    return arr;
}
// swap function to switch between two index in the same array
function swap(arr, i, min) {
    let current = arr[i];
    arr[i] = arr[min];
    arr[min] = current;

}
// partition function dividing the arry and put the pivot in correct place
function partition(arr, left, right) {
    let pivot = arr[right];
    let min = left - 1;
    for (let i = left; i <= right; i++) {
        if (arr[i] < pivot) {
            min++;
            swap(arr, i, min)

        }

    }
    swap(arr, right, min + 1)
    return min + 1;

}



module.exports = quickSort;