/** @format */

let vipStatus = '';

let guest = {
  name: 'Sarah Kate',
  age: 21,
  ticket: true,
  guestType: 'artist',
};

switch (guest.guestType) {
  case 'artist':
    vipStatus = 'Normal';

  case 'star':
    vipStatus = 'Important';

  case 'presidential':
    vipStatus = 'Mega-important';
    break;
  default:
    vipStatus = 'None';
}

console.log(vipStatus);
