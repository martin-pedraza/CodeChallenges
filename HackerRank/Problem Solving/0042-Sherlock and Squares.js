/******************************************************************************
Watson likes to challenge Sherlock's math ability. 
He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints. 
Sherlock must determine the number of square integers within that range.

*******************************************************************************/
'use strict';

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

function squares(a, b) {
    let count = 0;
    let number = Math.ceil(Math.sqrt(a));
    let squared = Math.pow(number, 2);
    while(squared >= a && squared <= b){
        count++;
        squared = Math.pow(++number, 2);
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const a = parseInt(firstMultipleInput[0], 10);

        const b = parseInt(firstMultipleInput[1], 10);

        const result = squares(a, b);

        ws.write(result + '\n');
    }

    ws.end();
}
