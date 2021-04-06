'use strict';
const { Node, LinkedList } = require('../../linked-list.js');
const zipLists = require('../ll-zip.js');




describe('zipLists function tests', () => {
    let linkedList1 = new LinkedList();
    let linkedList2 = new LinkedList();

    linkedList1.insert(3);
    linkedList1.insert(1);
    linkedList1.insert(17);
    linkedList2.insert(18);
    linkedList2.insert(19);


    linkedList2.insert(4);
    linkedList2.insert(9);
    linkedList2.insert(5);

    test('Can successfully add a node to the end of the linked list', async() => {


        let zib = await zipLists(linkedList1, linkedList2)
        console.log(linkedList1.toString());
        console.log(linkedList2.toString());
        console.log(zib.toString());

        expect(linkedList1.head.value).toEqual(1);

    });
})