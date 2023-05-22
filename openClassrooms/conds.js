function getGrade(score) {
  let grade;
  // Write your code here
  if (score > 25 && score <= 30) {
    grade = "A";
  } else if (score > 20 && score <= 25) {
    grade = "B";
  } else if (score > 15 && score <= 20) {
    grade = "C";
  } else if (score > 10 && score <= 15) {
    grade = "D";
  } else if (score > 5 && score <= 10) {
    grade = "E";
  } else if (score > 0 && score <= 5) {
    grade = "F";
  } else {
    grade = "Please enter a valid number between 0 and 30";
  }

  return grade;
}

function vowelsAndConsonants(s) {
  let vowel = "";
  let consonant = "";

  for (let i of s) {
    if ("aeiou".includes(i)) {
      vowel += i + "\n";
    } else {
      consonant += i + "\n";
    }
  }
  return vowel + consonant;
}

console.log(vowelsAndConsonants("javascriptloops"));
