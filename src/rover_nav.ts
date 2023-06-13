import { Orientation, RoverPosition } from "./mars_rover.types";

const x = 2;
const y = 3;
const orientation = "N";
const instructions = "R";

export function instruct_Rover(
  x: number,
  y: number,
  orientation: Orientation,
  instructions: string = ""
) {
  let currentY: number = y;
  let currentX: number = x;
  let currentOrientation: Orientation = orientation;
  const compass: Orientation[] = ["N", "E", "S", "W"];

  if (instructions === "M") {
    switch (orientation) {
      case "N":
        currentY = currentY + 1;
        break;
      case "S":
        currentY = currentY - 1;
        break;
      case "E":
        currentX = currentX + 1;
        break;
      case "W":
        currentX = currentX - 1;
        break;
    }
  } else {
    switch (instructions) {
      case "R":
        currentOrientation =
          compass[
            compass.indexOf(currentOrientation) === 3
              ? 0
              : compass.indexOf(currentOrientation) + 1
          ];
        break;
      case "L":
        currentOrientation =
          compass[
            compass.indexOf(currentOrientation) === 0
              ? 3
              : compass.indexOf(currentOrientation) - 1
          ];
        break;
    }
  }

  const currentPosition: RoverPosition = [
    currentX,
    currentY,
    currentOrientation,
  ];

  return currentPosition;
}
console.log(instruct_Rover(x, y, orientation, instructions));
