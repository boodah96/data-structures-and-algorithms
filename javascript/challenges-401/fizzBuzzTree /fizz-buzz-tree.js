'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.content = [];
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    fizzBuzzTree(node) {

        if (node.root === null) {
            return "empty node";
        }

        let traverse = (node) => {
            if (node) {
                if (node.value % 3 === 0 && node.value % 5 === 0) {
                    node.value = 'FizzBuzz';
                } else if (node.value % 3 === 0) {
                    node.value = 'Fizz';
                } else if (node.value % 5 === 0) {
                    node.value = 'Buzz';
                } else {
                    node.value = 'Not Fizz or Buzz';
                }
            }
        };

        if (node.content.length && node.value) {

            for (let i = 0; i < node.content.length; i++) {
                traverse(node.content[i]);

            }
        }
        traverse(node.root);
        return node;
    };
}