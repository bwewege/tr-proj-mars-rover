import {
  Compass,
  RoverPosition,
  Coordinates,
  status,
  roverStateType,
} from "./mars_rover.types";

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

  //let currentCoord: [Coordinates, status] = [{ x: x, y: y }, "Ready"];
  //let currentOrientation: Compass = direction;

  arrInstructions.forEach((instruction) => {
    switch (instruction) {
      case "M":
        if (roverState.status === "Plateau Limit Reached") {
          break;
        }
        roverState = moveRover(roverState);
        console.log(roverState);
        break;
      case "R":
        roverState.orientation =
          compass[
            compass.indexOf(roverState.orientation) === 3
              ? 0
              : compass.indexOf(roverState.orientation) + 1
          ];
        roverState.status = "Success";
        break;
      case "L":
        roverState.orientation =
          compass[
            compass.indexOf(roverState.orientation) === 0
              ? 3
              : compass.indexOf(roverState.orientation) - 1
          ];
        roverState.status = "Success";
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
