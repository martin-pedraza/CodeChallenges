/*****
 A modified Kaprekar number is a positive whole number with a special property.
 If you square it, then split the number into two integers and sum those integers, you have the same value you started with.

 Consider a positive whole number n with d digits.
 We square n to arrive at a number that is either 2 x d digits long or (2 x d) -1 digits long.
 Split the string representation of the square into two parts, l and r.
 The right hand part, r must be d digits long. The left is the remaining substring.
 Convert those two substrings back to integers, add them and see if you get .
 *****/
'use strict';

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

function kaprekarNumbers(p: number, q: number): void {
  const kaprekarNumbers: number[] = [];
  for (let i = p; i <= q; i++) {
    const squareStr = (i * i).toString();
    const len = squareStr.length;
    const left = parseInt(squareStr.slice(0, Math.floor(len / 2))) || 0;
    const right = parseInt(squareStr.slice(Math.floor(len / 2)));
    if (left + right === i) {
      kaprekarNumbers.push(i);
    }
  }
  console.log(kaprekarNumbers.length ? kaprekarNumbers.join(' ') : 'INVALID RANGE');
}

function main() {
  const p: number = parseInt(readLine().trim(), 10);

  const q: number = parseInt(readLine().trim(), 10);

  kaprekarNumbers(p, q);
}
