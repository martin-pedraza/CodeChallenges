/*****
 An English text needs to be encrypted using the following encryption scheme.
 First, the spaces are removed from the text. Let L be the length of this text.
 Then, characters are written into a grid, whose rows and columns have the following constraints:
 L < row < column < L
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

function encryption(s: string): string {
  const len: number = Math.ceil(Math.sqrt(s.replace(' ', '').length));
  const rows: string[] = [];
  const cols: string[] = [];
  for(let i=0; i<s.length; i+=len){
    rows.push(s.slice(i, i + len));
  }
  for(let i=0; i<len; i++){
    let col: string = '';
    for(const r of rows){
      if(r[i]){
        col += r[i];
      }
    }
    cols.push(col);
  }
  return cols.join(' ');
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  const s: string = readLine();

  const result: string = encryption(s);

  ws.write(result + '\n');

  ws.end();
}
