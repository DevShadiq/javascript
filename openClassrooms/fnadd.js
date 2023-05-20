/** @format */
const add = (firstNumber, secondNumber) => {
  const result = firstNumber + secondNumber;
  return result;
};

// let results = add(6, 6);
// console.log(results);

// console.log(add(6, 8));

const addArray = (arrayAdd) => {
  let sum = 0;
  for (let addss of arrayAdd) {
    sum += addss;
  }
  return sum / arrayAdd.length;
};

const firstArray = [4, 5, 2, 5, 4];
const secondtArray = [3, 2, 5, 3];
const thirdtArray = [5, 5, 6, 2, 5, 4, 8, 9];
const forthdtArray = [5, 5, 6, 8, 9, 7];

console.log('Avarage of 1st array ' + addArray(firstArray));
console.log('Avarage of 2nd array ' + addArray(secondtArray));
console.log('Avarage of 3rd array ' + addArray(thirdtArray));
console.log('Avarage of 4th array ' + addArray(forthdtArray));
