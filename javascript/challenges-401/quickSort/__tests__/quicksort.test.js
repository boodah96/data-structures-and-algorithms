'use strict';
const QuickSort = require('../quickSort')

describe('quick sort test', () => {
    test('correct sorting', () => {
        expect(QuickSort([1, 3, 4, 0, 7, 2], 0, 5)).toEqual([0, 1, 2, 3, 4, 7]);
    })
    test('edge case', () => {
        expect(QuickSort([0, 0, 0, 0, 0, 0], 0, 5)).toEqual([0, 0, 0, 0, 0, 0]);
    })
})