const { Graph, Vertex, Edge } = require("./graph");

const graph = new Graph();

const a = new Vertex('a');
const b = new Vertex('b');
const c = new Vertex('c');
const d = new Vertex('d');

graph.addNode(a);
graph.addNode(b);
graph.addNode(c);
graph.addNode(d);


graph.addEdge(a, b);

graph.addEdge(b, c);

graph.addEdge(c, d);

graph.addEdge(d, a);



describe("Graph", () => {
    it("Node can be successfully added to the graph", () => {
        const graph1 = new Graph();
        const one = new Vertex(1);
        graph1.addNode(one);

        expect(graph1.size()).toEqual(1);
    });
    it("A graph with only one node and edge can be properly returned", () => {
        const graph1 = new Graph();
        const one = new Vertex(1);
        graph1.addNode(one);

        expect(graph1.getNodes()).toEqual([1]);
    });
    it("A collection of all nodes can be properly retrieved from the graph", () => {
        expect(graph.getNodes()).toEqual(['a', 'b', 'c', 'd']);
    });
    it("A collection of all nodes can be properly retrieved from the graph", () => {
        expect(graph.getNodes().length).toEqual(4);
    });
    it("The proper size is returned, representing the number of nodes in the graph", () => {
        expect(graph.size()).toEqual(4);
    });
});