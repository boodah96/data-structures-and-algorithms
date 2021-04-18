'use strict';
'use strict';

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}


class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }


    preOrder() {
        const results = [];
        const _traverse = (node) => {
            results.push(node.value);
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
        };
        _traverse(this.root);
        return results;
    }

    // Left - Root - Right
    inOrder() {
            const results = [];
            const _traverse = (node) => {
                if (node.left) _traverse(node.left);
                results.push(node.value);
                if (node.right) _traverse(node.right);
            };
            _traverse(this.root);
            return results;
        }
        // left - Right - Root
    postOrder() {
        const results = [];
        const _traverse = (node) => {

            if (node.left) _traverse(node.left);

            if (node.right) _traverse(node.right);

            results.push(node.value);
        };
        _traverse(this.root);
        return results;
    }
    findMaximumValue() {
        if (!this.root) {
            return ' there is no root';
        }
        let array = this.postOrder();
        let max = this.root.value;

        for (let i = 0; i < array.length; i++) {
            if (array[i] > max)
                max = array[i];

        }
        return max;
    }
}

module.exports = BinaryTree;