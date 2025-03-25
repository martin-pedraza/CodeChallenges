//There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string.

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

function repeatedString(s: string, n: number): number {
  const countAInS = s.split('').filter(letter => letter === 'a').length;
  const fullRepeats = Math.floor(n / s.length);
  const remainder = n % s.length;
  const countAInRemainder = s.slice(0, remainder).split('').filter(letter => letter === 'a').length;

  return fullRepeats * countAInS + countAInRemainder;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  const s: string = readLine();

  const n: number = parseInt(readLine().trim(), 10);

  const result: number = repeatedString(s, n);

  ws.write(result + '\n');

  ws.end();
}
