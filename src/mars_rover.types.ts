export type Compass = "N" | "S" | "E" | "W";

export type status =
  | "Plateau Limit Reached"
  | "Success"
  | "Rover in Path"
  | "Ready";

//export type RoverOrientation = { rover: number; direction: Compass };

//export type RoverPosition = [x: number, y: number, direction: Compass];

//export type Instructions = "L" | "R" | "M";

export type Coordinates = { x: number; y: number };

export type PlateauSize = { width: number; height: number };

export type roverStateType = {
  id: number;
  coordinates: Coordinates;
  orientation: Compass;
  status: status;
};
