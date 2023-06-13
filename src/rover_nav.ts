import {
  Compass,
  RoverPosition,
  Instructions,
  Coordinates,
} from "./mars_rover.types";

// const x = 10;
// const y = 10;
// const direction = "N";
// const instructions = "MRMLMRM";

export function instruct_Rover(
  x: number,
  y: number,
  direction: Compass,
  instructions: string = ""
) {
  let currentCoord: Coordinates = { x: x, y: y };
  let currentOrientation: Compass = direction;

  const compass: Compass[] = ["N", "E", "S", "W"];
  const arrInstructions: string[] = instructions.split("");

  for (let i = 0; i < arrInstructions.length; i++) {
    if (arrInstructions[i] === "M") {
      currentCoord = addCoordinates(currentCoord, currentOrientation);
    } else if (arrInstructions[i] === "R") {
      currentOrientation =
        compass[
          compass.indexOf(currentOrientation) === 3
            ? 0
            : compass.indexOf(currentOrientation) + 1
        ];
    } else if (arrInstructions[i] === "L") {
      currentOrientation =
        compass[
          compass.indexOf(currentOrientation) === 0
            ? 3
            : compass.indexOf(currentOrientation) - 1
        ];
    }
  }

  const currentPosition: RoverPosition = [
    currentCoord.x,
    currentCoord.y,
    currentOrientation,
  ];

  return currentPosition;
}

function addCoordinates(
  currentCoord: Coordinates,
  currentOrientation: Compass
): Coordinates {
  const movement: { [key: string]: Coordinates } = {
    N: { x: 0, y: 1 },
    S: { x: 0, y: -1 },
    E: { x: 1, y: 0 },
    W: { x: -1, y: 0 },
  };
  const moveCoord: Coordinates = movement[currentOrientation];
  const newX = currentCoord.x + moveCoord.x;
  const newY = currentCoord.y + moveCoord.y;

  return { x: newX, y: newY };
}
