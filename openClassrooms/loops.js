function vowelsAndConsonants(s) {
  let vowels = "";
  let consonant = "";
  for (i of s) {
    if ("aeiou".includes(i)) {
      vowels += i + "\n";
    } else {
      consonant += i + "\n";
    }
  }
  return vowels + consonant;
}

console.log(vowelsAndConsonants("javascriptloops"));
