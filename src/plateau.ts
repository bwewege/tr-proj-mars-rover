import { Direction, RoverDirection } from "./mars_rover.types";

const x = 3;
const y = 3;

export function setPlateauArea(
  x: number,
  y: number,
  fill: RoverDirection = { rover: 0, direction: "X" }
): string[][] {
  const plateauArea: string[][] = Array(x)
    .fill(undefined)
    .map(() => Array(y).fill(fill));
  console.log(plateauArea);

  return plateauArea;
}

setPlateauArea(x, y);
