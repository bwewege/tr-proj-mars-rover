import { Orientation, RoverPosition, Instructions } from "./mars_rover.types";

const x = 10;
const y = 10;
const orientation = "N";
const instructions = "MRMLMRM";

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
  const arrInstructions: string[] = instructions.split("");

  for (let i = 0; i < arrInstructions.length; i++) {
    console.log(arrInstructions[i]);
    if (arrInstructions[i] === "M") {
      switch (currentOrientation) {
        case "N":
          currentY = currentY + 1;
          console.log("y:" + currentY);
          break;
        case "S":
          currentY = currentY - 1;
          console.log("y:" + currentY);
          break;
        case "E":
          currentX = currentX + 1;
          console.log("x:" + currentX);
          break;
        case "W":
          currentX = currentX - 1;
          console.log("x:" + currentX);
          break;
      }
    } else {
      switch (arrInstructions[i]) {
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
  }

  const currentPosition: RoverPosition = [
    currentX,
    currentY,
    currentOrientation,
  ];

  return currentPosition;
}
console.log(instruct_Rover(x, y, orientation, instructions));
