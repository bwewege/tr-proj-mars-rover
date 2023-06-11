const x = 3;
const y = 3;

export function setPlateauArea(x: number, y: number, fill: string = " ") {
  const plateauArea = Array(x)
    .fill(fill)
    .map(() => Array(y).fill(fill));
  console.log(plateauArea);

  return plateauArea;
}

setPlateauArea(x, y);
