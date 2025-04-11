/*****
 You wish to buy video games from the famous online video game store Mist.

 Usually, all games are sold at the same price, p dollars.
 However, they are planning to have the seasonal Halloween Sale next month in which you can buy games at a cheaper price.
 Specifically, the first game will cost p dollars, and every subsequent game will cost d dollars less than the previous one.
 This continues until the cost becomes less than or equal to m dollars, after which every game will cost m dollars.
 How many games can you buy during the Halloween Sale?
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

function howManyGames(p: number, d: number, m: number, s: number): number {
  let count: number = 0;
  while(s >= p){
    count++;
    s -= p;
    p = Math.max(p - d, m);
  }
  return count;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

  const p: number = parseInt(firstMultipleInput[0], 10);

  const d: number = parseInt(firstMultipleInput[1], 10);

  const m: number = parseInt(firstMultipleInput[2], 10);

  const s: number = parseInt(firstMultipleInput[3], 10);

  const answer: number = howManyGames(p, d, m, s);

  ws.write(answer + '\n');

  ws.end();
}
