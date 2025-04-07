/*****
 Lexicographical order is often known as alphabetical order when dealing with strings. A string is greater than another string if it comes later in a lexicographically sorted list.

 Given a word, create a new word by swapping some or all of its characters. This new word must meet two criteria:

 It must be greater than the original word
 It must be the smallest word that meets the first condition
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

function biggerIsGreater(w: string): string {
  const str_builder = (...parts: number[]): string => {
    return parts.map((char) => String.fromCharCode(char)).join('');
  };

  const cdes: number[] = [];
  for (let i = 0; i < w.length; i++) {
    cdes.push(w.charCodeAt(i));
  }

  let rss: number[] = [];
  for (let i = cdes.length - 2; i >= 0; i--) {
    const cdes_before = cdes.slice(0, i);
    const cdes_now = cdes.slice(i, i + 1)[0];
    const cdes_after = cdes.slice(i + 1);
    const cdes_rpl = cdes_after.filter((c) => c > cdes_now);
    if (cdes_rpl.length > 0) {
      const rpl_cde = Math.min(...cdes_rpl);
      const rpl_idx = cdes_after.lastIndexOf(rpl_cde);
      cdes_after.splice(rpl_idx, 1, cdes_now);
      rss = [...cdes_before, rpl_cde, ...cdes_after.sort((a, b) => a - b)];
      break;
    }
  }
  if (rss.length > 0) return str_builder(...rss);
  return 'no answer';
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  const T: number = parseInt(readLine().trim(), 10);

  for (let TItr: number = 0; TItr < T; TItr++) {
    const w: string = readLine();

    const result: string = biggerIsGreater(w);

    ws.write(result + '\n');
  }

  ws.end();
}
