import { instruct_Rover } from "./rover_nav";
import { setPlateauArea } from "./plateau";
import { Compass, PlateauSize, roverStateType } from "./mars_rover.types";

// // Initialise the plateau and make it available globally.
const width: number = 10;
const height: number = 15;

export let globalPlateauArea: PlateauSize;
globalPlateauArea = setPlateauArea({ width, height });

//Set parameters for each rover and call function using each set of parameters
const allTheRovers: [number, number, number, Compass, string][] = [
  [1, 0, 0, "N", "RMLMRMLMMMMMRM"],
  [2, 5, 5, "N", "RMLMMMLMMMRM"],
  [3, 8, 2, "N", "RMLMRMLM"],
];

let AllRoversFinalState: roverStateType[] = [];

for (const parameters of allTheRovers) {
  AllRoversFinalState.push(instruct_Rover(...parameters));
}

console.log(AllRoversFinalState);

// Trying to represent this visually. Don't Judge :)

// let maxX = 0;
// let maxY = 0;

// for (const rover of AllRoversFinalState) {
//   if (rover.coordinates.x >= maxX) {
//     maxX = rover.coordinates.x;
//   }
//   if (rover.coordinates.y >= maxY) {
//     maxY = rover.coordinates.y;
//   }
// }

// const horizontalBorder = "x".repeat(globalPlateauArea.width + 2);
// const innerSpace = " ".repeat(globalPlateauArea.width);
// const innerRow = `x${innerSpace}x`;

// console.log(horizontalBorder);

// for (let y = 0; y < globalPlateauArea.height; y++) {
//   let row = innerRow;
//   for (let x = 1; x < globalPlateauArea.width - 1; x++) {
//     const rover = AllRoversFinalState.find(
//       (rover) => rover.coordinates.x === x && rover.coordinates.y === y
//     );
//     if (rover) {
//       row = row.slice(0, x) + rover.id.toString() + row.slice(x + 1);
//     }
//   }
//   console.log(row);
// }

// console.log(horizontalBorder);
