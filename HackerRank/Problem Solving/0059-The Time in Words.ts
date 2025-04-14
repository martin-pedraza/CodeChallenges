/*****
 Given the time in numerals we may convert it into words
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

const num_en = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty one',
  'twenty two',
  'twenty three',
  'twenty four',
  'twenty five',
  'twenty six',
  'twenty seven',
  'twenty eight',
  'twenty nine',
  'thirty',
];

function timeInWords(h: number, m: number): string {
  const hours = num_en.slice();
  const minutes = num_en.map((n, i) => {
    if (i == 1) return `${n} minute`;
    if (i == 15) return 'quarter';
    if (i == 30) return 'half';
    return `${n} minutes`;
  });
  if (m == 0) return `${hours[h]} o' clock`;
  if (m <= 30) return `${minutes[m]} past ${hours[h]}`;
  return `${minutes[60 - m]} to ${hours[h + 1]}`;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  const h: number = parseInt(readLine().trim(), 10);

  const m: number = parseInt(readLine().trim(), 10);

  const result: string = timeInWords(h, m);

  ws.write(result + '\n');

  ws.end();
}
