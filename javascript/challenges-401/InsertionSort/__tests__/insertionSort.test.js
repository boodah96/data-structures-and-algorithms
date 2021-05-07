'use strict';
const { insertionSort } = require('../insertionSort');

describe('isertion test sort', () => {
    test('sorting an array', () => {
        expect(insertionSort([5, 4, 3])).toEqual([3, 4, 5])
    })
    test('sorting an array', () => {
        expect(insertionSort([4, 5, 3])).toEqual([3, 4, 5])
    })
})