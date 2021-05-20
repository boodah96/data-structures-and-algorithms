class Vertex {
    constructor(value) {
        this.value = value;
    }
}
class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this._adjacencyList = new Map();
    }
    addVertex(vertex) {
        this._adjacencyList.set(vertex, []);
    }

    getNeighbors(vertex) {
        if (!this._adjacencyList.has(vertex)) {
            throw new Error('Invalid Vertex', vertex);
        }
        // return this._adjacencyList.set(vertex);
        return this._adjacencyList.get(vertex);
    }
    size() {
            return this._adjacencyList.size;
        }
        // printAll() {
        //     for (const [vertex, edge] of this._adjacencyList.entries()) {
        //         console.log(vertex);
        //         // console.log(edge);
        //         // console.log(vertex);
        //     }
        // }
    addNode(vertex) {
        this._adjacencyList.set(vertex, []);
        return vertex;
    }

    addEdge(startVertex, endVertex, weight) {
        if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {} else {

            const adjency = this._adjacencyList.get(startVertex);
            adjency.push(new Edge(endVertex, weight));
        }

    }

    getNodes() {
        let nodes = [];
        let key = true;
        let adjKey = this._adjacencyList.keys();
        while (key) {
            key = adjKey.next().value;
            if (key != undefined) {
                nodes.push(key.value);
            }

        }
        return nodes;
    }


}

// const graph = new Graph();
// console.log(graph);
// // graph.addNode(7);
// // graph.addNode(8);
// // graph.addNode(5);
// // graph.addNode(9);
// // graph.addNode(2);
// graph.printAll();
module.exports = { Graph, Vertex, Edge };