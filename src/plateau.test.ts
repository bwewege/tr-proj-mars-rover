import { setPlateauArea } from "./plateau";

describe("Create a rectangular/square plateau based on width and height inputs", () => {
  test("create empty array if parameters are  0,0", () => {
    expect(setPlateauArea(0, 0)).toEqual({ width: 0, height: 0 });
  });
  //   test("create 2D array populated with default param 'fill' if parameters are  >0,>0", () => {
  //     expect(setPlateauArea(3, 3)).toEqual([
  //       [
  //         { direction: "X", rover: 0 },
  //         { direction: "X", rover: 0 },
  //         { direction: "X", rover: 0 },
  //       ],
  //       [
  //         { direction: "X", rover: 0 },
  //         { direction: "X", rover: 0 },
  //         { direction: "X", rover: 0 },
  //       ],
  //       [
  //         { direction: "X", rover: 0 },
  //         { direction: "X", rover: 0 },
  //         { direction: "X", rover: 0 },
  //       ],
  //     ]);
  //     expect(setPlateauArea(3, 4)).toEqual([
  //       [
  //         { direction: "X", rover: 0 },
  //         { direction: "X", rover: 0 },
  //         { direction: "X", rover: 0 },
  //       ],
  //       [
  //         { direction: "X", rover: 0 },
  //         { direction: "X", rover: 0 },
  //         { direction: "X", rover: 0 },
  //       ],
  //       [
  //         { direction: "X", rover: 0 },
  //         { direction: "X", rover: 0 },
  //         { direction: "X", rover: 0 },
  //       ],
  //       [
  //         { direction: "X", rover: 0 },
  //         { direction: "X", rover: 0 },
  //         { direction: "X", rover: 0 },
  //       ],
  //     ]);
  //   });
});

// //create test for empty input
// //create test for non integer input.
