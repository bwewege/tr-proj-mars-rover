import { instruct_Rover } from "./rover_nav";

describe("Receive rover's starting position, direction and string of instructions and return new location as array", () => {
  test("Rover does not move - return starting position", () => {
    expect(instruct_Rover(1, 2, 3, "N")).toEqual({
      id: 1,
      coordinates: { x: 2, y: 3 },
      orientation: "N",
      status: "Ready",
    });
  });
  test("Rover moves +1 in direction it's facing - return new position", () => {
    expect(instruct_Rover(1, 2, 3, "N", "M")).toEqual({
      id: 1,
      coordinates: { x: 2, y: 4 },
      orientation: "N",
      status: "Success",
    });
    expect(instruct_Rover(1, 2, 3, "S", "M")).toEqual({
      id: 1,
      coordinates: { x: 2, y: 2 },
      orientation: "S",
      status: "Success",
    });
    expect(instruct_Rover(1, 2, 3, "E", "M")).toEqual({
      id: 1,
      coordinates: { x: 3, y: 3 },
      orientation: "E",
      status: "Success",
    });
    expect(instruct_Rover(1, 2, 3, "W", "M")).toEqual({
      id: 1,
      coordinates: { x: 1, y: 3 },
      orientation: "W",
      status: "Success",
    });
  });
  test("Rover rotates 90 degrees L or R - return new position", () => {
    expect(instruct_Rover(1, 2, 3, "N", "L")).toEqual({
      id: 1,
      coordinates: { x: 2, y: 3 },
      orientation: "W",
      status: "Success",
    });
    expect(instruct_Rover(1, 2, 3, "S", "L")).toEqual({
      id: 1,
      coordinates: { x: 2, y: 3 },
      orientation: "E",
      status: "Success",
    });
    expect(instruct_Rover(1, 2, 3, "E", "L")).toEqual({
      id: 1,
      coordinates: { x: 2, y: 3 },
      orientation: "N",
      status: "Success",
    });
    expect(instruct_Rover(1, 2, 3, "W", "L")).toEqual({
      id: 1,
      coordinates: { x: 2, y: 3 },
      orientation: "S",
      status: "Success",
    });
    expect(instruct_Rover(1, 2, 3, "N", "R")).toEqual({
      id: 1,
      coordinates: { x: 2, y: 3 },
      orientation: "E",
      status: "Success",
    });
    expect(instruct_Rover(1, 2, 3, "S", "R")).toEqual({
      id: 1,
      coordinates: { x: 2, y: 3 },
      orientation: "W",
      status: "Success",
    });
    expect(instruct_Rover(1, 2, 3, "E", "R")).toEqual({
      id: 1,
      coordinates: { x: 2, y: 3 },
      orientation: "S",
      status: "Success",
    });
    expect(instruct_Rover(1, 2, 3, "W", "R")).toEqual({
      id: 1,
      coordinates: { x: 2, y: 3 },
      orientation: "N",
      status: "Success",
    });
  });
  test("Rover follows a string of multiple instructions sequentially", () => {
    expect(instruct_Rover(1, 10, 10, "N", "MRMLMRM")).toEqual({
      id: 1,
      coordinates: { x: 12, y: 12 },
      orientation: "E",
      status: "Success",
    });
    expect(instruct_Rover(1, 10, 10, "N", "MMMLLMMRLML")).toEqual({
      id: 1,
      coordinates: { x: 10, y: 10 },
      orientation: "E",
      status: "Success",
    });
  });
});
