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

function jumpingOnClouds(c: number[]): number {
  let count: number = 0;
  for(let index: number=2; index<=c.length; index+=2){
    count+=1;
    if(c[index] == 1){
      index-=1;
    }
  }
  return count;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  const n: number = parseInt(readLine().trim(), 10);

  const c: number[] = readLine().replace(/\s+$/g, '').split(' ').map(cTemp => parseInt(cTemp, 10));

  const result: number = jumpingOnClouds(c);

  ws.write(result + '\n');

  ws.end();
}
