"use strict";

const { Graph, Vertex } = require("./graph");

let graph = new Graph();

let first = new Vertex("A");
let second = new Vertex("B");
let third = new Vertex("C");
let fourth = new Vertex("D");

describe("Graph test", () => {
  test("Node  successfully added to the graph", () => {
    graph.addVertix(first);
    expect(graph.list.size).toBe(1);
  });

  test(" all nodes can be properly retrieved from the graph", () => {
    graph.addVertix(first);
    graph.addVertix(second);
    expect(graph.getNodes()).toMatchObject([{ value: "A" }, { value: "B" }]);
  });

  test(" edge can be added to the graph", () => {
    graph.addEdge(first, second);
    expect(graph.list.get(first)).toMatchObject([
      { vertex: { value: "B" }, weight: 0 },
    ]);
  });

  test("All appropriate neighbors can be retrieved from the graph, weight included", () => {
    expect(graph.getNeighbors(first)).toMatchObject([
      { vertex: { value: "B" }, weight: 0 },
    ]);
  });

  test("The proper size is returned, representing the number of nodes in the graph", () => {
    graph.addVertix(third);
    graph.addVertix(fourth);
    expect(graph.getSize()).toBe(4);
  });

  test("A graph with only one node and edge can be  returned", () => {
    graph.addEdge(third);
    expect(graph.list.size).toBe(4);
  });

  test("empty graph  returns null", () => {
    let newgraph = new Graph();
    expect(newgraph.getNodes().length).toBe(0);
  });
});
