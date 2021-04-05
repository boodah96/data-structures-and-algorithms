'use strict';
const { Node, LinkedList } = require('../linked-list');

describe('linked list test', () => {
    let ll = new LinkedList();

    test('Can successfully instantiate an empty linked list', () => {
        expect(ll.head).toEqual(null);

    });

    test('Can properly insert into the linked list', () => {

        ll.insert(10);

        expect(ll.head.value).toEqual(10);
    });

    test('The head property will properly point to the first node in the linked list', () => {

        ll.insert(10);
        ll.insert(50);

        expect(ll.head.value).toEqual(50);
    });
    test('Can properly insert multiple nodes into the linked list', () => {
        ll.insert(10);
        ll.insert(20);
        ll.insert(30);
        ll.insert(40);
        expect(ll.head.next.value).toEqual(30);

    });
    test('Will return true when finding a value within the linked list that exists', () => {
        ll.insert(10);
        ll.insert(20);
        ll.insert(30);
        let includ = ll.includes(30)

        expect(includ).toBeTruthy()

    });

    test('Will return false when searching for a value in the linked list that does not exist', () => {
        ll.insert(10);
        ll.insert(20);
        ll.insert(30);
        let includ = ll.includes(600)

        expect(includ).toBeFalsy();

    });
    test('Can properly return a collection of all the values that exist in the linked list', () => {
        let newll = new LinkedList();
        newll.insert(10);
        newll.insert(20);
        newll.insert(30);


        expect(newll.toString()).toEqual("{ 30 } -> { 20 } -> { 10 } -> NULL");

    });

});