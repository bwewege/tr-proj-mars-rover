import { Direction, RoverPosition } from "./mars_rover.types";

export function instruct_Rover(x: number, y: number, direction: Direction) {
  const currentPosition: RoverPosition = [x, y, direction];

  return currentPosition;
}
