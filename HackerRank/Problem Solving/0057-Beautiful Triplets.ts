/*****
 Given a sequence of integers a, a triplet (a[i],a[j],a[k]) is beautiful if:
    i < j < k
    a[j] - a[i] = a[k] - a[j] = d
 Given an increasing sequence of integers and the value of , count the number of beautiful triplets in the sequence.
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

function beautifulTriplets(d: number, arr: number[]): number {
  let count: number = 0;
  for(const n of arr){
    if(arr.includes(n + d) && arr.includes(n + 2 * d)){
      count++;
    }
  }
  return count;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

  const n: number = parseInt(firstMultipleInput[0], 10);

  const d: number = parseInt(firstMultipleInput[1], 10);

  const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  const result: number = beautifulTriplets(d, arr);

  ws.write(result + '\n');

  ws.end();
}
