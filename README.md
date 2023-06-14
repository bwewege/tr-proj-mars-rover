# Mars Rover TypeScript Project

This project implements a Mars Rover navigation system. It allows you to define the navigation area, the plateau, and set the initial
coordinates and orientations of multiple rovers. You can then instruct each rover to move around the plateau by sending a sequence of instructions.

## Features
- Define the size of a square or rectangular plateau - Width and height
- Set the starting position (x, y) and orientation (N,S,E,W) of each rover
- Instruct the rovers to move based on a series of instructions withing a string (L, R, M)
- Detect the plateau boundry and restrict further movement

## Future Features
- Detect if a rover is going to collide with another rover and restrict further movement
- Visually represent the plateau and each rovers current position 
- Allow user input
  - Let use choose which rover to move
  - Let use decide initial position
  - Allow rover to move more than once
  - Allow user to decide movement
- Visually represent each rovers movement as it receives each instruction.

This repository can be used as a template for creating a TypeScript project using Jest for testing.

## Instructions

1) Set all parameters in the index.ts
