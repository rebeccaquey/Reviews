/* eslint-disable func-names */
const { KnexTimeoutError } = require('knex');

exports.up = function (knex) {
  knex.schema.dropTableIfExists('rooms');
  knex.schema.dropTableIfExists('reviews');
  knex.schema.createTable('rooms', (table) => {
    table.increment('_roomId');
    table.string('')
  });
};

exports.down = function (knex) {

};
