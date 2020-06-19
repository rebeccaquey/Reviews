/* eslint-disable func-names */
const fakeData = require('../faker/fakeData.js');

const roomsData = fakeData.randomRooms;

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('rooms').del()
    .then(() => knex('rooms').insert(roomsData));
};
