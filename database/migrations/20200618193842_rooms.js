/* eslint-disable func-names */
const { KnexTimeoutError } = require('knex');

exports.up = function (knex) {
  return knex.schema
    .dropTableIfExists('rooms')
    .dropTableIfExists('reviews')   
    .createTable('rooms', (table) => {
      table.increments('_id').primary();
      table.string('_roomId');
    })
    .createTable('reviews', (table) => {
      table.increments('_id').primary();
      table.string('name');
      table.string('userImageUrl', 500);
      table.string('createdAt');
      table.string('content', 1000);
      table.integer('overall');
      table.integer('cleanliness');
      table.integer('communication');
      table.integer('checkin');
      table.integer('accuracy');
      table.integer('location');
      table.integer('value');
      table.integer('roomId').references('_id').inTable('rooms');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('reviews')
    .dropTable('rooms');
};
