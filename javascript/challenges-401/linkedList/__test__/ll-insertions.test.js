'use strict';
const { Node, LinkedList } = require('../linked-list');

describe('linked list test', () => {
    let ll = new LinkedList();
    ll.insert(10);
    ll.insert(2);

    test('Can successfully add a node to the end of the linked list', () => {

        ll.append(5);

        expect(ll.head.next.next.value).toEqual(5);

    });
    test('Can successfully add multiple nodes to the end of a linked list', () => {

        ll.append(6);

        expect(ll.head.next.next.next.value).toEqual(6);

    });

    test('Can successfully insert a node before a node located i the middle of a linked list', () => {


        ll.insertBefore(5, 12);
        console.log(ll.head);


        expect(ll.head.next.next.value).toEqual(12);

    });
    test('Can successfully insert a node before the first node of a linked list', () => {


        ll.insertBefore(2, 12);

        expect(ll.head.value).toEqual(12);

    });
    test('Can successfully insert after a node in the middle of the linked list', () => {


        ll.insertAfter(2, 7);

        expect(ll.head.next.next.value).toEqual(7);

    });
    test('Can successfully insert a node after the last node of the linked list', () => {


        ll.insertAfter(6, 7);

        expect(ll.head.next.next.next.next.next.next.next.value).toEqual(7);

    });


});