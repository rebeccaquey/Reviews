/* eslint-disable func-names */
const fakeData = require('../faker/fakeData.js');

const roomsData = fakeData.randomRooms;
exports.seed = knex => knex('reviews').del()
  .then(() => knex('rooms').del())
  .then(() => knex('rooms').insert(roomsData))
  // eslint-disable-next-line no-console
  .catch((err) => { console.log(err); });
