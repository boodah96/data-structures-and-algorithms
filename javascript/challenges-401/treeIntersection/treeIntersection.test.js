'use strict';
const { Node, treeIntersection, BinaryTree } = require('./treeIntersection')
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
one.left = two;
one.right = three;
two.left = four;
two.right = five;
five.left = eight;
three.left = six;
three.right = seven;
let t1 = new BinaryTree(one);
const nine = new Node(9);
nine.left = three;
nine.right = six;
let t2 = new BinaryTree(nine);
const ten = new Node(10);
const eleven = new Node(11);
ten.left = seven;
ten.right = six;
let t3 = new BinaryTree(ten);
let t4 = new BinaryTree(eleven);


describe('tree intersection tests', () => {
    test('“Happy Path” - Expected outcome', () => {
        expect(treeIntersection(t1, t2)).toEqual([3, 6, 7])

    })
    test('Edge Case (some of nodes are dublicated)', () => {
        expect(treeIntersection(t1, t3)).toEqual([7, 6])


    })
    test('Expected failure)', () => {
        expect(treeIntersection(t1, t4)).toEqual("no intersections ")

    })
})