'use strict';
const { Node, LinkedList } = require('../../linked-list.js');
const zipLists = require('../ll-zip.js');




describe('zipLists function tests', () => {


    test('Can successfully ZipList when list2 longer than list1', async() => {
        let linkedList1 = new LinkedList();
        let linkedList2 = new LinkedList();
        ///list 1

        linkedList1.insert(3);
        linkedList1.insert(1);
        linkedList1.insert(17);
        ///list 2

        linkedList2.insert(18);
        linkedList2.insert(19);
        linkedList2.insert(4);
        linkedList2.insert(9);
        linkedList2.insert(5);

        let zib = await zipLists(linkedList1, linkedList2)
        expect(zib.toString()).toEqual('{ 17 } -> { 5 } -> { 1 } -> { 9 } -> { 3 } -> { 4 } -> { 19 } -> { 18 } -> NULL');

    });
    test('Can successfully ZipList when list1 longer than list2', async() => {
        let linkedList1 = new LinkedList();
        let linkedList2 = new LinkedList();
        ///list 1

        linkedList1.insert(3);
        linkedList1.insert(1);
        linkedList1.insert(17);
        linkedList1.insert(18);
        linkedList1.insert(19);
        ///list 2
        linkedList2.insert(4);
        linkedList2.insert(9);
        linkedList2.insert(5);
        let zib = await zipLists(linkedList1, linkedList2)


        expect(zib.toString()).toEqual('{ 19 } -> { 5 } -> { 18 } -> { 9 } -> { 17 } -> { 4 } -> { 1 } -> { 3 } -> NULL');

    });
})