/*****
 There are a number of people who will be attending ACM-ICPC World Finals.
 Each of them may be well versed in a number of topics.
 Given a list of topics known by each attendee, presented as binary strings, determine the maximum number of topics a 2-person team can know.
 Each subject has a column in the binary string, and a '1' means the subject is known while '0' means it is not.
 Also determine the number of teams that know the maximum number of topics.
 Return an integer array with two elements.
 The first is the maximum number of topics known, and the second is the number of teams that know that number of topics.
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

function acmTeam(topic: string[]): number[] {
  let known: number = 0;
  let count: number = 0;
  const lengthSubject = topic[0].split('').length;

  for(let i=0; i<topic.length-1; i++){
    for(let j=i+1; j<topic.length; j++){
      let allSubjects: number = 0;
      for(let k=0; k<lengthSubject; k++){
        if(topic[i][k] == '1' || topic[j][k] == '1'){
          allSubjects++;
        }
      }
      if(allSubjects > known){
        known = allSubjects;
        count = 1;
      }else if(allSubjects == known){
        count++;
      }
    }
  }
  console.log([known, count]);
  return [known, count];
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

  const n: number = parseInt(firstMultipleInput[0], 10);

  const m: number = parseInt(firstMultipleInput[1], 10);

  let topic: string[] = [];

  for (let i: number = 0; i < n; i++) {
    const topicItem: string = readLine();
    topic.push(topicItem);
  }

  const result: number[] = acmTeam(topic);

  ws.write(result.join('\n') + '\n');

  ws.end();
}
