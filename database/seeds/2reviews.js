/* eslint-disable func-names */
const fakeData = require('../faker/fakeData.js');

const reviewsData = fakeData.randomReviews;
exports.seed = (knex) => knex('reviews').del()
  .then(() => knex('reviews').insert(reviewsData));
