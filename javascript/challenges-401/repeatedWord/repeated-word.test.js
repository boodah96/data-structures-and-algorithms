'use strict';
const repeatedWords = require('./repeated-word')

describe('check repeated word', () => {
    test('check one line statment with one letter reapeated', () => {
        expect(repeatedWords('Once upon a time, there was a brave princess who...')).toEqual('a')
    })
    test('check one line statment with word reapeated', () => {
        expect(repeatedWords('"It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."z')).toEqual('summer')
    })
    test('check if There is no duplicated words', () => {
        expect(repeatedWords('check if There is no duplicated words')).toEqual('There is no duplicated words')
    })
})