'use strict';
const { HashTable, LinkedList, Node } = require('../hashtable/hashtable');

function repeatedWord(str) {

    let words = str.match(/\w+/g);
    console.log(words);
    let hashtable = new HashTable();
    let outPut = "There is no duplicated words";
    for (let i = 0; i < words.length; i++) {
        let element = words[i];
        if (!hashtable.contains(element)) {
            hashtable.add(element, element)

        } else {
            outPut = element;
            break;

        }
    };
    return outPut;


}

module.exports = repeatedWord;