'use strict';
const { Node, LinkedList } = require('../linked-list');

describe("linkedlist-kth-from-end test", () => {
    let ll = new LinkedList();
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    test('Where k is greater than the length of the linked list', () => {
        expect(ll.kthFromEnd(3)).toEqual('Exception');

    })
    test('Where k and the length of the list are the samet', () => {
        expect(ll.kthFromEnd(2)).toEqual(1);

    })
    test('Where k is not a positive integer ', () => {
        expect(ll.kthFromEnd(-3)).toEqual('Exception');

    })
    test('Where the linked list is of a size 1', () => {
        let newLL = new LinkedList();
        newLL.insert(2);
        expect(newLL.kthFromEnd(0)).toEqual(2);

    })





})