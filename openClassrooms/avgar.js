/** @format */

const calAvgRate = (arrayAdd) => {
  if (arrayAdd.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let addss of arrayAdd) {
    sum += addss;
  }
  return sum / arrayAdd.length;
};

const ratingOfBangladesh = [4, 5, 2, 5, 4, 3, 4];
const ratingOfSadiq = [3, 2, 5, 3];
const ratingOfClara = [5, 5, 6, 2, 5, 4, 8, 9];
const ratingOfColin = [5, 5, 6, 8, 9, 7];

const avgBd = calAvgRate(ratingOfBangladesh);
const avgSadiq = calAvgRate(ratingOfSadiq);
const avgClara = calAvgRate(ratingOfClara);
const avgColin = calAvgRate(ratingOfColin);

if (avgBd && avgSadiq && avgClara && avgColin) {
  document.querySelector('#bd-score').innerText = avgBd.toFixed(1) + ' Stars';
  document.querySelector('#colin-score').innerText =
    avgColin.toFixed(1) + ' Stars';
  document.querySelector('#clara-score').innerText =
    avgClara.toFixed(1) + ' Stars';
  document.querySelector('#sadiq-score').innerText =
    avgSadiq.toFixed(1) + ' Stars';

  document.querySelector('#mango-score').innerText = `${
    calAvgRate([]) === 0 ? 'No ratings' : calAvgRate([]) + 'Stars'
  }`;
}

// document.getElementById('bd-score').innerHTML =
//   calAvgRate(ratingOfBangladesh).toFixed(1);

// console.log('Avarage of 2nd array ' + calAvgRate(ratingOfSadiq));
// console.log('Avarage of 3rd array ' + calAvgRate(ratingOfClara));
// console.log('Avarage of 4th array ' + calAvgRate(ratingOfColin));
// console.log('Avarage of 1st array ' + calAvgRate(ratingOfBangladesh));
