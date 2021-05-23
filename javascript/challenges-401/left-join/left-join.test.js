'use strict';

const leftJoin = require("./left-join");
const { HashTable } = require('../hashtable/hashtable');

const hash1 = new HashTable(1000);
const hash2 = new HashTable();
const hash3 = new HashTable();
hash1.add('abd', '0789');
hash1.add('ahmad', '0777');
hash2.add('abd', '892');
hash2.add('ahmad', '111');
hash2.add('yazan', '111');
hash3.add('mahmoud', '111');

describe('left join function tests', () => {

    test("corect left join", () => {


        expect(leftJoin(hash1, hash2)).toEqual([
            ['ahmad', '0777', '111'],
            ['abd', '0789', '892'],
        ]);
    });
    test("no key matches", () => {


        expect(leftJoin(hash1, hash3)).toEqual([
            ['ahmad', '0777', null],
            ['abd', '0789', null],
        ]);
    });


    test("pass only one hashTable", () => {


        expect(leftJoin(hash1)).toEqual("put two hashTabe as parameter");
    });

})