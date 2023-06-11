import { setPlateauArea } from "./plateau";

describe("Create a 2D array of consecutive integers based on an x, y parameters", () => {
  test("create empty array if parameters are  0,0", () => {
    expect(setPlateauArea(0, 0)).toEqual([]);
  });
});
