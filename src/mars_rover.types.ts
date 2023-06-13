export type Compass = "N" | "S" | "E" | "W" | "X";

export type RoverOrientation = { rover: number; direction: Compass };

export type RoverPosition = [x: number, y: number, direction: Compass];

export type Instructions = "L" | "R" | "M";

export type Coordinates = { x: number; y: number };
