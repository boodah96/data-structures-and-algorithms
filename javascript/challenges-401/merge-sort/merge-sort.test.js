'use strict';
let { mergeSort, merge } = require('./merge-sort');

test('run mergeSort function with arr', () => {
    let arr = [12, 1, 44, 2, 7];
    expect(mergeSort(arr)).toEqual([1, 2, 7, 12, 44]);

})
test('array withe uniqe index', () => {
    let arr = [12];
    expect(mergeSort(arr)).toEqual([12]);

})