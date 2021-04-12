'use strict';
const AnimalShelter = require('../fifo-animal-shelter.js');

let shelter = new AnimalShelter();

describe('Animal shelter testing', () => {

    test('add new cat to the shelter', () => {
        let sherry = {
            type: 'cat',
            name: 'Sherry'
        }
        shelter.enqueue(sherry);
        expect(shelter.cats.front.value.name).toEqual('Sherry');
    });
    test('add new dog to the shelter', () => {
        let hask = {
            type: 'dog',
            name: 'Hask'
        }
        shelter.enqueue(hask);
        expect(shelter.dogs.front.value.name).toEqual('Hask');
    });
    test('add new animal to the shelter', () => {
        let cow = {
            type: 'cow',
            name: 'sena'
        }
        expect(shelter.enqueue(cow)).toEqual('dogs or cats only');
    });
    test('remove  dog from the shelter', () => {

        let dog = shelter.dequeue('dog');
        expect(dog.name).toEqual('Hask');
    });




})