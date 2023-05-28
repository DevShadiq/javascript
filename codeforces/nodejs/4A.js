'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');
function print(x) {
    console.log(x);
}
let inputString = '';
let currentLine = 0;
process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});
process.stdin.on('end', () => {
    inputString = inputString
        .trim()
        .split('\n')
        .map((line) => {
            return line.trim();
        });
    main();
});
function readline() {
    return inputString[currentLine++];
}
///********** Start Main Function **********//

function main() {
    ///********** Solution Start Here **********///
    var n = parseInt(readline(4));
    if (n % 2 === 1) {
        console.log('NO');
    } else {
        if (n === 2) {
            console.log('NO');
        } else {
            console.log('YES');
        }
    }
    ///********** Solution End Here **********///
}
