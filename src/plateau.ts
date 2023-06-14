import { PlateauSize } from "./mars_rover.types";

export function setPlateauArea({
  width,
  height,
}: {
  width: number;
  height: number;
}): PlateauSize {
  if (width <= 0 || height <= 0) {
    throw new Error("Invalid coordinates. Parameters must be greater than 0.");
  }
  const plateau: PlateauSize = { width: width, height: height };

  return plateau;
}
