'use strict';
const { Stack } = require('../stacksAndQueues/stacks-and-queues')

class PseudoQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();

    }
    enqueue(value) {
        this.stack1.push(value);
    };
    dequeue() {
        if (!this.stack1.top && !this.stack2.top) {
            return 'empty';
        } else if (!this.stack2.top) {
            while (this.stack1.top) {
                this.stack2.push(this.stack1.pop());
            }
            return this.stack2.pop();


        }

    };
}

module.exports = PseudoQueue;