const { Node, LinkedList } = require('../linkedList/linked-list');

class HashTable {
    constructor(size = 50) {
        this.table = new Array(size);
    }


    add(key, value) {
        let hash = this.hash(key);

        if (!this.table[hash]) {
            this.table[hash] = new LinkedList();
        }

        this.table[hash].insert({ key, value });
    }

    hash(key) {
        let hash = 941;
        for (let i = 0; i < key.length; i++) {
            hash = hash * 599 * key.charCodeAt(i);
        }

        return hash % this.table.length;
    }

    get(key) {
        let empty = null;
        if (!this.contains(key)) return empty;
        let index = this.hash(key)
        let bucket = this.table[index];
        let current = bucket.head;
        while (current) {
            if (current.value.key === key) return current.value.value;
            current = current.next;
        }
        return empty;

    }
    contains(key) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if (!bucket) return false;
        let current = bucket.head;
        while (current) {
            if (current.value.key === key) return true;
            current = current.next;
        }
        return false;


    }
}

module.exports = { HashTable, LinkedList, Node }