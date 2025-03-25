// Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

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

function equalizeArray(arr: number[]): number {
  let result = [];
  arr.forEach(number => {
    const equals: number[] = arr.filter(n => n == number);
    if(equals.length > result.length){
      result = equals;
    }
  })
  return arr.length - result.length;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  const n: number = parseInt(readLine().trim(), 10);

  const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  const result: number = equalizeArray(arr);

  ws.write(result + '\n');

  ws.end();
}
