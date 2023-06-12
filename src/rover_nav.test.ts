import { instruct_Rover } from "./rover_nav";

describe("Receive rover's starting position, direction and string of instructions and return new location as array", () => {
  test("Rover does not move - return starting position", () => {
    expect(instruct_Rover(2, 3, "N")).toEqual([2, 3, "N"]);
  });
});
