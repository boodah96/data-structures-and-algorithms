'use strict';
const { Queue } = require('../stacksAndQueues/stacks-and-queues.js');

class AnimalShelter {
    constructor() {
        this.dogs = new Queue();
        this.cats = new Queue();

    }

    enqueue(animal) {
        if (animal.type === 'cat') {
            this.cats.enqueue(animal)

        } else if (animal.type === 'dog') {
            this.dogs.enqueue(animal)
        } else {
            return 'dogs or cats only';
        };
    };

    dequeue(pref) {
        if (pref === 'cat') {
            return this.cats.dequeue()

        } else if (pref === 'dog') {
            return this.dogs.dequeue()
        } else {
            return 'dogs or cats only';
        }

    };

};

module.exports = AnimalShelter;