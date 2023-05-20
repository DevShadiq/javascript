/** @format */

const user = {
  firstName: 'Sadiq',
  lastName: 'Rahman',
  age: 26,
};

const otherUser = {
  firstName: 'William',
  age: 35,
};

// if (otherUser.firstName && otherUser.lastName) {
//   console.log(otherUser.firstName + ' ' + otherUser.lastName);
// } else {
//   console.log('Last Name Missing!!');
// }

try {
  console.log(otherUser.firstName + ' ' + otherUser.lastName);
} catch (error) {
  console.log(error);
}
