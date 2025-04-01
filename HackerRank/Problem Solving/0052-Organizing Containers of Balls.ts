/*****
 David has several containers, each with a number of balls in it. He has just enough containers to sort each type of ball he has into its own container. David wants to sort the balls using his sort method.

 David wants to perform some number of swap operations such that:

 Each container contains only balls of the same type.
 No two balls of the same type are located in different containers.
 *****/
'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
 inputString += inputStdin;
});

process.stdin.on('end', function(): void {
 inputLines = inputString.split('\n');
 inputString = '';

 main();
});

function readLine(): string {
 return inputLines[currentLine++];
}

function organizingContainers(container: number[][]): string {
 const rows: number[] = container.map(row => row.reduce((a, b) => a + b, 0));
 const cols: number[] = Array.from({ length: container.length }, (_, j) => container.reduce((sum, col) => sum + col[j], 0));

 return rows.sort((a, b) => a - b).toString() === cols.sort((a, b) => a - b).toString() ? "Possible" : "Impossible";
}

function main() {
 const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

 const q: number = parseInt(readLine().trim(), 10);

 for (let qItr: number = 0; qItr < q; qItr++) {
  const n: number = parseInt(readLine().trim(), 10);

  let container: number[][] = Array(n);

  for (let i: number = 0; i < n; i++) {
   container[i] = readLine().replace(/\s+$/g, '').split(' ').map(containerTemp => parseInt(containerTemp, 10));
  }

  const result: string = organizingContainers(container);

  ws.write(result + '\n');
 }

 ws.end();
}