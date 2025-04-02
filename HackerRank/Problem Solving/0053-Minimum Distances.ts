/*****
 The distance between two array values is the number of indices between them.
 Given a, find the minimum distance between any pair of equal elements in the array.
 If no such value exists, return -1.
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

function minimumDistances(a: number[]): number {
  let minimumDistance: number = Number.MAX_SAFE_INTEGER;
  for(let i=0; i<a.length; i++){
    const pairIndex: number = a.indexOf(a[i], i + 1);
    if(pairIndex != -1 && pairIndex != i && pairIndex - i < minimumDistance){
      minimumDistance = pairIndex - i;
    }
  }
  return minimumDistance == Number.MAX_SAFE_INTEGER ? -1 : minimumDistance;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  const n: number = parseInt(readLine().trim(), 10);

  const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

  const result: number = minimumDistances(a);

  ws.write(result + '\n');

  ws.end();
}
