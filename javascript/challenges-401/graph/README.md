# Graphs
 A graph data structure consists of a finite (and possibly mutable) set of vertices (also called nodes or points), together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph. These pairs are known as edges (also called links or lines), and for a directed graph are also known as arrows.
## Challenge
The graph should be represented as an adjacency list, and should include the following methods:
- AddNode()
- AddEdge()
- GetNodes()
- GetNeighbors()
- Size()

## Big O

|Method| Time | space |
|----- | ---- | ----- |
|AddNode| O(1) |O(n)  |
|AddEdge| O(1) |O(n)  |
|GetNodes| O(n) |O(n)  |
|GetNeighbors| O(1) |O(1)  |
|Size| O(1) |O(1)  |


## API
- AddNode(): Adds a new node to the graph
- AddEdge(): Adds a new edge between two nodes in the graph
- GetNodes():Returns all of the nodes in the graph as a collection 
- GetNeighbors():Returns a collection of edges connected to the given node
- Size(): Returns the total number of nodes in the graph