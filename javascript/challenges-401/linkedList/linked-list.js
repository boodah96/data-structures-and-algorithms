'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(value) {
        if (!this.head) {
            this.head = new Node(value)
        } else {
            let newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    includes(value) {
        let ifInclude = false;

        let current = this.head;
        while (current) {
            if (current.value == value) {
                ifInclude = true;
                return true;
            } else {
                current = current.next;
            }
        }
        return ifInclude;
    }

    toString() {
        let current = this.head;
        let result = '';
        while (current) {
            result += `{ ${current.value} } -> `
            current = current.next;
        }
        result += `NULL`;
        return result;
    }

}

module.exports = {
    Node,
    LinkedList
};