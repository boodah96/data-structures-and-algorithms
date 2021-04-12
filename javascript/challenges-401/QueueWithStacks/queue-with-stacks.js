'use strict';
let { Stack } = require('../stack-and-queue/stack-and-queue.js')

class PseudoQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();

    }
    enqueue(value) {
        this.stack1.push(value);
    };
    dequeue() {

    };
}