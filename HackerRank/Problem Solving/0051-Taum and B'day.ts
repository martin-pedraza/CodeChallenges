/*****
 Taum is planning to celebrate the birthday of his friend, Diksha. There are two types of gifts that Diksha wants from Taum: one is black and the other is white.
 To make her happy, Taum has to buy b black gifts and w white gifts.

 The cost of each black gift is bc units.
 The cost of every white gift is wc units.
 The cost to convert a black gift into white gift or vice versa is  units.
 Determine the minimum cost of Diksha's gifts.
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

function taumBday(b: number, w: number, bc: number, wc: number, z: number): bigint {
  const minCostBlack: bigint = BigInt(Math.min(bc, wc + z));
  const minCostWhite: bigint = BigInt(Math.min(wc, bc + z));
  return (BigInt(b) * minCostBlack) + (BigInt(w) * minCostWhite);
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  const t: number = parseInt(readLine().trim(), 10);

  for (let tItr: number = 0; tItr < t; tItr++) {
    const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const b: number = parseInt(firstMultipleInput[0], 10);

    const w: number = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const bc: number = parseInt(secondMultipleInput[0], 10);

    const wc: number = parseInt(secondMultipleInput[1], 10);

    const z: number = parseInt(secondMultipleInput[2], 10);

    const result = taumBday(b, w, bc, wc, z);

    ws.write(result + '\n');
  }

  ws.end();
}
