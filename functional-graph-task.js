let exampleGraph = {
    'a': ['c', 'b'],
    'b': ['a', 'c', 'd', 'f'],
    'c': ['a', 'b', 'd', 'e'],
    'd': ['b', 'c', 'e'],
    'e': ['c', 'd'],
    'f': ['b']
};


class Vertex {
    constructor(name, value) {
      this.name = name;
      this.value = value;
      this.adjList = [];
    }
    addEdgeTo(vertices) {
      vertices.forEach(v => {
        this.adjList.push(v);
      });
    }
}
  

class Graph {
    constructor() {
    this.vertices = [];
    }
    
    getVertices() {
    return this.vertices;
    }
    
    generateGraphFromJson(graph) {
        
      // Assume that the parameter graph is a structure similar to exampleGraph mentioned above (line 1);
      // This function should convert the graph definition into the Vertex class based graph structure;
      // In addition, while you generate the vertices, add all vertices to the vertices array.
   
    for (let vertex in graph) {
        this.vertices.push(new Vertex(vertex, 0));
    }

    for (let name in graph) {
        let vertex = this.getVertex(name);
        let adjList = graph[name];
        let nodeList = [];
        adjList.forEach(list => {
            nodeList.push(this.getVertex(list));
        })
        vertex.addEdgeTo(nodeList);
    }
}

    getVertex(name) {
        for (let vertex of this.vertices) {
            if (vertex.name === name) return vertex;
          }
        }
}

let newGraph = new Graph();

newGraph.generateGraphFromJson(exampleGraph);

console.log(newGraph);