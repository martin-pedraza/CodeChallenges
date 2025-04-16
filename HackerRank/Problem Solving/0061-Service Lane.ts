/*****
 A driver is driving on the freeway. The check engine light of his vehicle is on, and the driver wants to get service immediately.
 Luckily, a service lane runs parallel to the highway. It varies in width along its length.
 You will be given an array of widths at points along the road (indices), then a list of the indices of entry and exit points.
 Considering each entry and exit point pair, calculate the maximum size vehicle that can travel that segment of the service lane safely.
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

function serviceLane(width: number[], cases: number[][]): number[] {
  const result: number[] = [];
  for(const c of cases){
    result.push(Math.min(...width.slice(c[0], c[1] + 1)))
  }
  return result;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

  const n: number = parseInt(firstMultipleInput[0], 10);

  const t: number = parseInt(firstMultipleInput[1], 10);

  const width: number[] = readLine().replace(/\s+$/g, '').split(' ').map(widthTemp => parseInt(widthTemp, 10));

  let cases: number[][] = Array(t);

  for (let i: number = 0; i < t; i++) {
    cases[i] = readLine().replace(/\s+$/g, '').split(' ').map(casesTemp => parseInt(casesTemp, 10));
  }

  const result: number[] = serviceLane(width, cases);

  ws.write(result.join('\n') + '\n');

  ws.end();
}
