import { Compass, Coordinates, roverStateType } from "./mars_rover.types";

export function instruct_Rover(
  id: number,
  x: number,
  y: number,
  direction: Compass,
  instructions: string = ""
) {
  const compass: Compass[] = ["N", "E", "S", "W"];
  const arrInstructions: string[] = instructions.split("");

  let roverState: roverStateType = {
    id: id,
    coordinates: { x: x, y: y },
    orientation: direction,
    status: "Ready",
  };

  arrInstructions.forEach((instruction) => {
    switch (instruction) {
      case "M":
        if (roverState.status === "Plateau Limit Reached") {
          break;
        }
        roverState = moveRover(roverState);
        break;
      case "L":
      case "R":
        roverState = rotateRover(roverState, instruction);
        break;
    }
  });

  return roverState;
}

function moveRover(roverState: roverStateType): roverStateType {
  const movement: { [key: string]: Coordinates } = {
    N: { x: 0, y: 1 },
    S: { x: 0, y: -1 },
    E: { x: 1, y: 0 },
    W: { x: -1, y: 0 },
  }; // NTS - future change - pass in number of moves.

  const plateau: Coordinates = { x: 20, y: 20 }; //plateau defined in size

  const moveCoord: Coordinates = movement[roverState.orientation];

  if (
    roverState.coordinates.x + moveCoord.x > plateau.x - 1 ||
    roverState.coordinates.y + moveCoord.y > plateau.y - 1 ||
    roverState.coordinates.x + moveCoord.x < 0 ||
    roverState.coordinates.y + moveCoord.y < 0
  ) {
    roverState.status = "Plateau Limit Reached";
  } else {
    roverState.coordinates = {
      x: roverState.coordinates.x + moveCoord.x,
      y: roverState.coordinates.y + moveCoord.y,
    };
    roverState.status = "Success";
  }

  return roverState;
}

function rotateRover(
  roverState: roverStateType,
  instruction: string
): roverStateType {
  const rotationDirection: { [key: string]: number } = { L: -1, R: 1 };
  const compass: Compass[] = ["N", "E", "S", "W"];
  const compassLength: number = compass.length - 1;

  let newOrientation =
    compass.indexOf(roverState.orientation) + rotationDirection[instruction];

  if (newOrientation > compassLength) {
    newOrientation = 0;
  } else if (newOrientation < 0) {
    newOrientation = compassLength;
  }

  roverState.orientation = compass[newOrientation];
  roverState.status = "Success";

  return roverState;
}
