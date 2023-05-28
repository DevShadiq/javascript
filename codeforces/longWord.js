// ********** Code Start **********
var s = '5 abcdefgh abcdefghi abcdefghij abcdefghijk abcdefghijklm';
let n = [];
let numBer = 0;
for (let i = 0; i < s.length; i++) {
    n = s.split(' ');
}
for (var j = 0; j < n.length; j++) {
    numBer = n[j].length;
    if (numBer > 10) {
        console.log(
            n[j].charAt(0) +
                (n[j].length - 2) +
                n[j].charAt(n[j].length - 1)
        );
    } else {
        //console.log(n[j]);
        if ((n = n.filter((n) => isNaN(n)))) {
            console.log(n[j]);
        }
    }
}
//console.log(numBer);
