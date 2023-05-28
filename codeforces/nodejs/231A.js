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
    var n = +readline();
    let s = [1, 2, 3];
    for (let i = 0; i < n; i++) {
        s[i] = readline();
    }

    console.log(s);

    ///********** Solution End Here **********///
}
