'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(value) {
        let node = new Node(value);
        if (!this.top) {
            this.top = node;
            this.length++;
        } else {

            node.next = this.top;
            this.top = node;
            this.length++;
        }

    };
    pop() {
        if (!this.top) {
            return 'empty';
        } else {
            let value = this.top.value;
            this.top = this.top.next;
            this.length--;
            return value;
        }

    };
    peek() {
        if (!this.top) {
            return 'empty';
        } else {
            let value = this.top.value;

            return value;
        }
    };
    isEmpty() {
        if (!this.top) {
            return true;
        } else {

            return false;
        }
    };

}


class Queue {
    constructor() {

        this.front = null;
        this.length = 0;
    }
    enqueue(value) {
        let node = new Node(value);
        this.length++;
        if (!this.front) {
            this.front = node;
        } else {
            let current = this.front;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

    };
    dequeue() {
        if (!this.front) {
            return 'empty';
        } else {
            let value = this.front.value;
            let first = this.front
            this.front = first.next;
            this.length--;
            return value;
        }
    };
    peek() {
        if (!this.front) {
            return 'empty';
        } else {
            let value = this.front.value;

            return value;
        }
    };
    isEmpty() {
        if (!this.front) {
            return true;
        } else {

            return false;
        }

    };

}

module.exports = {
    Node,
    Stack,
    Queue

}