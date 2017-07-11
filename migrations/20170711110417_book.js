
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', table => {
    table.increments('id').primary();
    table.text('title').notNullable();
    table.text('genre');
    table.text('description')
    table.text('cover_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('book');
};
