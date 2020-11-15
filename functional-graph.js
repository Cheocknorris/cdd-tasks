//  This class defines a vertex in a graph
class Vertex {
    constructor(name, value) {
      this.name = name;
      this.value = value;
      // adjacency list contains entry for
      // every vertex that is connected to this vertex
      this.adjList = [];
    }
    addEdgeTo(vertices) {
      // Vertices is an array and each
      // vertex should be added to the adjacency list
      vertices.forEach(v => {
        this.adjList.push(v);
      });
    }
  }
  // Creating vertices with name and value
  let A = new Vertex("A", 5);
  let B = new Vertex("B", 4);
  let C = new Vertex("C", 3);
  let D = new Vertex("D", 2);
  let E = new Vertex("E", 1);
  
  // Connect vertices to form a graph
  A.addEdgeTo([E, D, B]);
  B.addEdgeTo([A, C]);
  C.addEdgeTo([B, D]);
  D.addEdgeTo([C, A, E]);
  E.addEdgeTo([A, D]);
  
  // start vetex represents the vetex where any graph algorithm starts
  let startVertex = A;