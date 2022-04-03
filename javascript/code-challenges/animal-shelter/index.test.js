"use strict";

const Shelter = require("./index");
let animalShelter = new Shelter();
const cat = { type: "cat" };
const lion = { type: "lion" };

describe(" animal shelter tests", () => {
  it("enqueue cat to cat queue", () => {
    animalShelter.enqueue(cat);
    expect(animalShelter.cat.size).toBe(1);
  });
  it("dequeue from cat queue", () => {
    animalShelter.dequeue(cat);
    expect(animalShelter.cat.size).toEqual(1);
  });
  it("return null when pass object other than dog or cat for dequeue method", () => {
    let x = animalShelter.enqueue(lion);
    expect(x).toBeNull();
  });

  it(" return null if the animal is not dog or cat for enqueue method", () => {
    let x = animalShelter.dequeue(lion);
    expect(x).toBeNull();
  });
});
