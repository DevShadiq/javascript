/** @format */

let saeatLeft = 10;
let passangersStillToBoards = 100;
let passangersBoarded = 0;
while (saeatLeft > 0 && passangersStillToBoards > 0) {
  passangersBoarded++;
  saeatLeft--;
  passangersStillToBoards--;
}

document.getElementById('demo').innerHTML =
  passangersBoarded + ' Succesfully on Board';
