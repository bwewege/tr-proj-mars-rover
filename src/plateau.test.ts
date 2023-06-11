import { setPlateauArea } from "./plateau";

describe("Create a 2D array of param string based on an x, y parameters", () => {
  test("create empty array if parameters are  0,0", () => {
    expect(setPlateauArea(0, 0)).toEqual([]);
  });
  test("create 2D array populated with default param 'fill' if parameters are  >0,>0", () => {
    expect(setPlateauArea(3, 3)).toEqual([
      [
        { direction: "X", rover: 0 },
        { direction: "X", rover: 0 },
        { direction: "X", rover: 0 },
      ],
      [
        { direction: "X", rover: 0 },
        { direction: "X", rover: 0 },
        { direction: "X", rover: 0 },
      ],
      [
        { direction: "X", rover: 0 },
        { direction: "X", rover: 0 },
        { direction: "X", rover: 0 },
      ],
    ]);
    expect(setPlateauArea(4, 3)).toEqual([
      [
        { direction: "X", rover: 0 },
        { direction: "X", rover: 0 },
        { direction: "X", rover: 0 },
      ],
      [
        { direction: "X", rover: 0 },
        { direction: "X", rover: 0 },
        { direction: "X", rover: 0 },
      ],
      [
        { direction: "X", rover: 0 },
        { direction: "X", rover: 0 },
        { direction: "X", rover: 0 },
      ],
      [
        { direction: "X", rover: 0 },
        { direction: "X", rover: 0 },
        { direction: "X", rover: 0 },
      ],
    ]);
  });
});
