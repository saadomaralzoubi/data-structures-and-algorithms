const businessTrip = require("./trip");
const { Graph } = require("../graph");

describe("businessTrip", () => {
  let graph = new Graph();
  graph.addVertix("Pandora");
  graph.addVertix("Arendelle");
  graph.addVertix("Metroville");
  graph.addVertix("Monstropolis");
  graph.addVertix("Naboo");
  graph.addVertix("Narnia");
  graph.addEdge("Pandora", "Arendelle", 150);
  graph.addEdge("Pandora", "Metroville", 82);
  graph.addEdge("Arendelle", "Monstropolis", 42);
  graph.addEdge("Arendelle", "Metroville", 99);
  graph.addEdge("Metroville", "Monstropolis", 105);
  graph.addEdge("Metroville", "Naboo", 26);
  graph.addEdge("Monstropolis", "Naboo", 73);
  graph.addEdge("Naboo", "Narnia", 250);
  graph.addEdge("Monstropolis", "Narnia", 37);

  test("should return null if there is no path", () => {
    expect(businessTrip(graph, ["Pandora", "Narnia"])).toBe(null);
  });
  test("should return the cost of the trip", () => {
    expect(businessTrip(graph, ["Pandora", "Metroville"])).toBe(82);
  });
});
