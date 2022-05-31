"use strict";

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
    this.list = new Map();
  }

  addVertix(vertex) {
    this.list.set(vertex, []);
  }

  addEdge(start, end, weight = 0) {
    if (!this.list.has(start) || !this.list.has(end)) {
      console.log("vertex is not existed");
    }

    const edge = new Edge(end, weight);
    const startV = this.list.get(start);
    startV.push(edge);
  }
  printAll() {
    for (const [vertex, edge] of this.list.entries()) {
      console.log(vertex, edge);
    }
  }
  getNeighbors(vertex) {
    if (!this.list.has(vertex)) {
      return "node not found";
    } else {
      return this.list.get(vertex);
    }
  }

  getNodes() {
    let result = [];
    for (const [vertex] of this.list.entries()) {
      result.push(vertex);
    }
    return result;
  }

  getSize() {
    return this.list.size > 0 ? this.list.size : null;
  }
  breadthFirst(start) {
    if (this.list.size === 0) {
      return "Graph is empty";
    }
    if (!this.list.has(start)) {
      return null;
    }
    let queue = [];
    let visited = new Set();
    let current;
    queue.push(start);
    visited.add(start);
    while (queue.length) {
      let front = queue.shift();
      current = this.getNeighbors(front);
      current.forEach((neighbor) => {
        if (!visited.has(neighbor.vertex)) {
          queue.push(neighbor.vertex);
          visited.add(neighbor.vertex);
        }
      });
    }
    return visited;
  }
}

module.exports = { Graph, Vertex };
