import { Orientation, RoverPosition } from "./mars_rover.types";

const x = 2;
const y = 3;
const orientation = "N";
const instructions = "";

export function instruct_Rover(
  x: number,
  y: number,
  orientation: Orientation,
  instructions: string = ""
) {
  let currentY: number = y;
  let currentX: number = x;

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
  }

  const currentPosition: RoverPosition = [currentX, currentY, orientation];

  return currentPosition;
}

console.log(instruct_Rover(x, y, orientation, instructions));
