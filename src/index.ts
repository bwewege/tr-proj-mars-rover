// NB *** Comment out line 15 to 27 before running tests

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

// Store final rover state for future use
let AllRoversFinalState: roverStateType[] = [];

for (const parameters of allTheRovers) {
  AllRoversFinalState.push(instruct_Rover(...parameters));
}

console.log(AllRoversFinalState);
