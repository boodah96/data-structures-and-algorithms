'use strict';
const insertShiftArray = require('../array-shift.js').function;
describe('array shift test', () => {

    test('insertShiftArray function test', () => {
        expect(insertShiftArray([2, 4, 6, 8], 55)).toEqual([2, 4, 55, 6, 8]);
    })
})