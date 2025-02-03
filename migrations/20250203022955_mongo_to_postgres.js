/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('trips', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('code').unique().notNullable();
    table.integer('nights').notNullable();
    table.date('start').notNullable();
    table.string('resort').notNullable();
    table.decimal('price').notNullable();
    table.string('image');
    table.string('description').notNullable();
    table.timestamps(true, true);
  }).then(() => {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('email').unique().notNullable();
      table.string('name').notNullable();
      table.string('hash').notNullable();
      table.string('salt').notNullable();
      table.timestamps(true, true);
    });
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users').then
  (() => knex.schema.dropTable('trips'));
};
