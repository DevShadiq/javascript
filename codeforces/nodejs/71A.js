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
    let s = [];

    for (let i = 0; i < n; i++) {
        s[i] = readline();
    }
    for (let j = 0; j < s.length; j++) {
        if (s[j].length > 10) {
            console.log(
                s[j].charAt(0) +
                    (s[j].length - 2) +
                    s[j].charAt(s[j].length - 1)
            );
        } else {
            console.log(s[j]);
        }
    }
    ///********** Solution End Here **********///
}
