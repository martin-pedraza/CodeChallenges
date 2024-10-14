/******************************************************************************
Given a set of distinct integers, print the size of a maximal subset of S where the sum of any 2 numbers in S' is not evenly divisible by k.

*******************************************************************************/
console.log('Hello World');'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function nonDivisibleSubset(k, s) {
    if (k === 1) return 1;

    const remainderCounts = new Array(k).fill(0);

    for (const num of s) {
        remainderCounts[num % k]++;
    }

    let maxSubsetSize = remainderCounts[0] > 0 ? 1 : 0;

    for (let i = 1; i <= Math.floor(k / 2); i++) {
        maxSubsetSize += (i === k - i) ? 1 : Math.max(remainderCounts[i], remainderCounts[k - i]);
    }

    return maxSubsetSize;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const result = nonDivisibleSubset(k, s);

    ws.write(result + '\n');

    ws.end();
}
