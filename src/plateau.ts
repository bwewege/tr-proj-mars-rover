const x = 3;
const y = 3;

export function setPlateauArea(
  x: number,
  y: number,
  fill: string = " "
): string[][] {
  const plateauArea: string[][] = Array(x)
    .fill(undefined)
    .map(() => Array(y).fill(fill));
  console.log(plateauArea);

  return plateauArea;
}

setPlateauArea(x, y);
