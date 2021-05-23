// 'use strict';
const { HashTable } = require('../hashtable/hashtable');



function leftJoin(hash1, hash2) {
    if (!hash1 || !hash2) return 'put two hashTabe as parameter';


    let result = [];

    for (let i = 0; i < Object.keys(hash1.table).length; i++) {

        let key = Object.values(hash1.table)[i].head.value.key;
        let value = Object.values(hash1.table)[i].head.value.value;
        result.push([key, value, hash2.get(key)])


    }
    return result;
}


module.exports = leftJoin;