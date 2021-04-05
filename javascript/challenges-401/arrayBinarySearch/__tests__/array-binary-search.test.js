const BinarySearch = require('../array-binary-search');
'use strict';

describe('array-binary-search', () => {

    test('insertShiftArray function test', () => {
        expect(BinarySearch([2, 4, 6, 8], 4)).toEqual(1);
    })
})