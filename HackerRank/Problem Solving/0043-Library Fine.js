/******************************************************************************
Your local library needs your help! 
Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). 
The fee structure is as follows:

If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0).
If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine = 15 Hackos * (the number of days late).
If the book is returned after the expected return month but still within the same calendar year as the expected return date, the fine = 500 Hackos * (the number of months late).
If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000 Hackos.

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

function libraryFine(d1, m1, y1, d2, m2, y2) {
    if(y1 > y2) return 10000;
    if(y1 < y2) return 0;
    
    if(m1 > m2) return (m1 - m2) * 500;
    if(m1 < m2) return 0;
    
    return d1 > d2 ? (d1 - d2) * 15 : 0;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const d1 = parseInt(firstMultipleInput[0], 10);

    const m1 = parseInt(firstMultipleInput[1], 10);

    const y1 = parseInt(firstMultipleInput[2], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const d2 = parseInt(secondMultipleInput[0], 10);

    const m2 = parseInt(secondMultipleInput[1], 10);

    const y2 = parseInt(secondMultipleInput[2], 10);

    const result = libraryFine(d1, m1, y1, d2, m2, y2);

    ws.write(result + '\n');

    ws.end();
}