import { RoverOrientation } from "./mars_rover.types";

const x = 6;
const y = 7;

export function setPlateauArea(
  x: number,
  y: number,
  fill: RoverOrientation = { rover: 0, direction: "X" }
): string[][] {
  const plateauArea: string[][] = Array(y)
    .fill(undefined)
    .map(() => Array(x).fill(fill));

  return plateauArea;
}

setPlateauArea(x, y);
