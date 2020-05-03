'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';

user.hobby = 'skydiving';

user.premium = false;

const userData = Object.entries(user);

//   eslint-disable-next-line
for (const entry of userData) {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}: ${value}`);
}
