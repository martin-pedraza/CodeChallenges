/*****
 Little Bobby loves chocolate. He frequently goes to his favorite 5 & 10 store, Penny Auntie, to buy them.
 They are having a promotion at Penny Auntie.
 If Bobby saves enough wrappers, he can turn them in for a free chocolate.
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

function chocolateFeast(n: number, c: number, m: number): number {
  let count: number = Math.floor(n / c);
  let wrapper: number = count;
  while(wrapper >= m){
    count++;
    wrapper -= m;
    wrapper++;
  }
  return count;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  const t: number = parseInt(readLine().trim(), 10);

  for (let tItr: number = 0; tItr < t; tItr++) {
    const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const n: number = parseInt(firstMultipleInput[0], 10);

    const c: number = parseInt(firstMultipleInput[1], 10);

    const m: number = parseInt(firstMultipleInput[2], 10);

    const result: number = chocolateFeast(n, c, m);

    ws.write(result + '\n');
  }

  ws.end();
}
