/* eslint-disable func-names */
const fakeData = require('../faker/fakeData.js');

const reviewsData = fakeData.randomReviews;
exports.seed = knex => knex('reviews').del()
  .then(() => knex.batchInsert('reviews', reviewsData, 10000))
  .catch((err) => { console.log(err); });

