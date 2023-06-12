import { instruct_Rover } from "./rover_nav";

describe("Receive rover's starting position, direction and string of instructions and return new location as array", () => {
  test("Rover does not move - return starting position", () => {
    expect(instruct_Rover(2, 3, "N")).toEqual([2, 3, "N"]);
  });
  test("Rover moves +1 in direction it's facing - return new position", () => {
    expect(instruct_Rover(2, 3, "N", "M")).toEqual([2, 4, "N"]);
    expect(instruct_Rover(2, 3, "S", "M")).toEqual([2, 2, "S"]);
    expect(instruct_Rover(2, 3, "E", "M")).toEqual([3, 3, "E"]);
    expect(instruct_Rover(2, 3, "W", "M")).toEqual([1, 3, "W"]);
  });
});
