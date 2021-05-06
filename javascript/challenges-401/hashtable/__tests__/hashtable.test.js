'use strict';
const { HashTable, LinkedList, Node } = require('../hashtable');

describe('HashTable tests', () => {

    const hashTable = new HashTable(1);

    test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
        hashTable.add('Abd', '0789111111');
        const expected = [{ "head": { "next": null, "value": { "key": "Abd", "value": "0789111111" } }, "size": 1 }];
        expect(hashTable.table).toEqual(expect.arrayContaining(expected));
    })
    test('Retrieving based on a key returns the value stored', () => {
        hashTable.get('Abd')
        const expected = '0789111111';
        expect(hashTable.get('Abd')).toEqual('0789111111');

    })
    test('Successfully returns null for a key that does not exist in the hashtable', () => {

        expect(hashTable.get('Ahmad')).toBeNull();
    })
    test('Successfully handle a collision within the hashtable', () => {

        hashTable.add('Abd2', '0789111111');
        const expected = [{ "head": { "next": { "next": null, "value": { "key": "Abd", "value": "0789111111" } }, "value": { "key": "Abd2", "value": "0789111111" } }, "size": 2 }];
        expect(hashTable.table).toEqual(expect.arrayContaining(expected));
    })
    test('Successfully retrieve a value from a bucket within the hashtable that has a collision ', () => {

        hashTable.add('Abd2', '0789');
        const expected = [{ "head": { "next": { "next": null, "value": { "key": "Abd", "value": "0789" } }, "value": { "key": "Abd2", "value": "0789111111" } }, "size": 2 }];
        expect(hashTable.get('Abd2')).toEqual("0789");
    })
    test('Successfully hash a key to an in-range value', () => {
        const hashTable2 = new HashTable(150);


        expect(hashTable2.hash('Abd2')).toBeLessThanOrEqual(150);
    })

})