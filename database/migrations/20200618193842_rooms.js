/* eslint-disable func-names */

exports.up = function (knex) {
  return knex.schema
    .dropTableIfExists('rooms')
    .dropTableIfExists('reviews')
    .createTable('rooms', (table) => {
      table.increments('_id').primary().unsigned();
      table.string('_room_id');
    })
    .createTable('reviews', (table) => {
      table.increments('_id').primary().unsigned();
      table.string('name');
      table.string('image_url', 500);
      table.string('created_at');
      table.string('content', 1000);
      table.integer('overall');
      table.integer('cleanliness');
      table.integer('communication');
      table.integer('checkin');
      table.integer('accuracy');
      table.integer('location');
      table.integer('value');
      table.integer('room_id')
        .unsigned()
        .references('_id')
        .inTable('rooms')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('reviews')
    .dropTable('rooms');
};
