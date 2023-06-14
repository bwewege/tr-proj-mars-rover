import { setPlateauArea } from "./plateau";

describe("Create a rectangular/square plateau based on width and height inputs", () => {
  test("create square object based on width equal to height", () => {
    expect(setPlateauArea({ width: 5, height: 5 })).toEqual({
      width: 5,
      height: 5,
    });
  });
  test("create rectangular object based on width not equal to height", () => {
    expect(setPlateauArea({ width: 10, height: 15 })).toEqual({
      width: 10,
      height: 15,
    });
  });
});
