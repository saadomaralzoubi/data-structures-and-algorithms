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
  it(" BreadthFirst search", () => {
    graph.addVertix(1);
    graph.addVertix(2);
    graph.addVertix(3);
    graph.addVertix(4);
    graph.addVertix(5);
    graph.addEdge(1, 2, 5);
    graph.addEdge(1, 3, 5);
    graph.addEdge(2, 3, 5);
    graph.addEdge(2, 4, 5);
    graph.addEdge(4, 5, 5);
    graph.addEdge(5, 3, 5);
    expect(graph.breadthFirst(1)).toEqual(new Set([1, 2, 3, 4, 5]));
    let Graph2 = new Graph();
    expect(Graph2.breadthFirst("")).toEqual("Graph is empty");
    Graph2.addVertix();
    expect(Graph2.breadthFirst("")).toEqual(null);
  });
});
describe("Graph", () => {
  it("Depth First", () => {
    let test = new Graph();

    let one = new Vertex("A");
    let two = new Vertex("B");
    let three = new Vertex("C");
    let four = new Vertex("D");
    let five = new Vertex("E");
    let six = new Vertex("F");
    let seven = new Vertex("G");
    let eight = new Vertex("H");

    test.addVertix(one);
    test.addVertix(two);
    test.addVertix(three);
    test.addVertix(four);
    test.addVertix(five);
    test.addVertix(six);
    test.addVertix(seven);
    test.addVertix(eight);

    test.addEdge(one, two);
    test.addEdge(one, four);
    test.addEdge(two, three);
    test.addEdge(two, four);
    test.addEdge(three, seven);
    test.addEdge(four, five);
    test.addEdge(four, eight);
    test.addEdge(four, six);
    test.addEdge(six, eight);
    expect(test.depthFirst(one)).toEqual("A,B,C,G,D,E,H,F,");
  });
});
