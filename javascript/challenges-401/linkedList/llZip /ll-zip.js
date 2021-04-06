'use strict';
const { Node, LinkedList } = require('../linked-list');

const zipLists = (list1, list2) => {
    let list = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;
    let longer = (list1.size > list2.size) ? list1.size : list2.size;

    for (let i = 0; i <= longer; i++) {
        if (current1) {
            list.append(current1.value);
            current1 = current1.next
        };
        if (current2) {
            list.append(current2.value);
            current2 = current2.next
        }

    }

    return list;

}

module.exports = zipLists;