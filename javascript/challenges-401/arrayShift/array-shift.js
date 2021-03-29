'use strict';

function insertShiftArray(arr, n) {
    let middArr;
    if (arr.length % 2 === 0) { middArr = parseInt(arr.length / 2); } else {
        middArr = parseInt(arr.length / 2 + 1);
    }

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i == middArr) {
            if (n) {
                newArr.push(n);

            }
            newArr.push(arr[i]);


        } else {
            newArr.push(arr[i]);
        };
    };
    return newArr;

}
console.log(insertShiftArray([2, 4, 6, 8], 55))