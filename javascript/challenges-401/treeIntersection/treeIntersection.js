'use strict';
const BinaryTree = require('../BinaryTree/BinaryTree');
const { HashTable, Node } = require('../hashtable/hashtable')

function treeIntersection(t1, t2) {
    const tree1 = t1.preOrder();
    const tree2 = t2.preOrder();
    let trees = [tree1, tree2];
    let hashtable = new HashTable();
    let intersectionHash = new HashTable();
    let intersectioArr = [];
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < trees[j].length; i++) {
            let element = trees[j][i];
            if (!hashtable.contains(element)) {
                hashtable.add(element, element)

            } else if (!intersectionHash.contains(element)) {
                intersectionHash.add(element, element);
                intersectioArr.push(element);
            }
        }
    }
    if (intersectioArr.length === 0) return "no intersections "
    return intersectioArr;
}



module.exports = { Node, treeIntersection, BinaryTree };