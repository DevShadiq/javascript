'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');

function print(x) {
    console.log(x);
}
let inputString = '';
let currentLine = 0;
function readline() {
    return inputString[currentLine++];
}

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});
process.stdin.on('end', () => {
    inputString = inputString.split('\n');
    main();
});

// ********** Code Start **********

function main() {
    //codes goes here
}
