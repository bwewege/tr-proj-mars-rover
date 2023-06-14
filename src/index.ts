//first call plataue function and input size

//Send Rover it's starting position
//Send rover its instructions

// output rovers final position and message if had to stop cause of plateau.
import { instruct_Rover } from "./rover_nav";
import { setPlateauArea } from "./plateau";

const id = 1;
const x = 5;
const y = 5;
const direction = "W";
let instructions = "R";

console.log(instruct_Rover(id, x, y, direction, instructions));
