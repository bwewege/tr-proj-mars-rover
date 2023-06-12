export type Direction = "N" | "S" | "E" | "W" | "X";

export type RoverDirection = { rover: number; direction: Direction };

export type RoverPosition = [x: number, y: number, direction: Direction];
