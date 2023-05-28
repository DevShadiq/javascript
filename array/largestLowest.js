let arr = [
    46, 66, 90, 50, 45, 5, 55, 145, 2, 3, 260, 6, 98, 289, 300, 59,
    369, 600,
];

var arr2 = [
    46, 66, 90, 50, 45, 5, 55, 145, 2, 3, 260, 6, 98, 289, 300, 59,
    369, 600,
];

//Largest number travasing
let largestNum = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
        largestNum = arr[i];
    }
}
console.log('Largest Number [arr] : ' + largestNum);

// ///second largest number travasing
let largestNumber = arr[0];
let secLargNum = 0;
for (let m = 0; m < arr.length; m++) {
    if (arr[m] > largestNumber) {
        secLargNum = largestNumber;
        largestNumber = arr[m];
    } else if (arr[m] > secLargNum && arr[m] != largestNumber) {
        secLargNum = arr[m];
    }
}
console.log('Largest Number [arr] : ' + largestNumber);
console.log('2nd Largest Number  [arr] : ' + secLargNum);

let smallestNumber = arr[0];
let secSmallNum = 0;
let thirdSmalest = 0;
let forthLowest = 0;

for (let k = 0; k < arr.length; k++) {
    if (arr[k] < smallestNumber) {
        forthLowest = thirdSmalest;
        thirdSmalest = secSmallNum;
        secSmallNum = smallestNumber;
        smallestNumber = arr[k];
    } else if (arr[k] < secSmallNum) {
        forthLowest = thirdSmalest;
        thirdSmalest = secSmallNum;
        secSmallNum = arr[k];
    } else if (arr[k] < thirdSmalest) {
        forthLowest = thirdSmalest;
        thirdSmalest = arr[k];
    } else if (arr[k] < forthLowest) {
        forthLowest = arr[k];
    }
}
console.log('Smallest Number  [arr] : ' + smallestNumber);
console.log('2nd Smallest Number   [arr]: ' + secSmallNum);
console.log('3rd Smallest Number  [arr]: ' + thirdSmalest);
console.log('4th Smallest Number  [arr] : ' + forthLowest);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
        largestNumber = arr[i];
    }
}
console.log('Largest Number  [arr] : ' + largestNumber);

let lowestNum1 = arr2[0];
let secLowest1 = 0;
for (let ii = 0; ii < arr2.length; ii++) {
    if (arr2[ii] < lowestNum1) {
        secLowest1 = lowestNum1;
        lowestNum1 = arr2[ii];
    } else if (arr2[ii] < secLowest1 && arr2[ii] < lowestNum1) {
        secLowest1 = arr2[ii];
    }
}
console.log('Lowest1 Number [arr2] : ' + lowestNum1);
console.log('2nd Lowest1 Number [arr2] : ' + secLowest1);
///Arrray data must be unique then nth work properly othewise not///
let n = 5;
function nthLowest(array, nth) {
    var sorted = array.sort(function (a, b) {
        return a - b;
    });
    return sorted[nth - 1];
}
let nths;
switch (n) {
    case 1:
        nths = 'st';

        break;
    case 2:
        nths = 'nd';
        break;
    case 3:
        nths = 'rd';
        break;
    default:
        nths = 'th';
}

console.log(
    n + nths + ' Lowest Number is [arr2] : ' + nthLowest(arr2, n)
);

let m = 4;
function nthLargest(array, nt) {
    var sortedLargesr = array.sort(function (a, b) {
        return b - a;
    });
    return sortedLargesr[nt - 1];
}

let nth1;
switch (m) {
    case 1:
        nth1 = 'st';

        break;
    case 2:
        nth1 = 'nd';
        break;
    case 3:
        nth1 = 'rd';
        break;
    default:
        nth1 = 'th';
}
console.log(
    m + nth1 + ' Largest Number is [arr2] : ' + nthLargest(arr2, m)
);
