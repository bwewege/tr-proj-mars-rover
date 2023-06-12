export type Orientation = "N" | "S" | "E" | "W" | "X";

export type RoverOrientation = { rover: number; direction: Orientation };

export type RoverPosition = [x: number, y: number, direction: Orientation];
