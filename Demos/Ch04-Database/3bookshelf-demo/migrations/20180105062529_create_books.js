exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', (table)=> {
      table.increments('id').primary();
      table.string('title');
    }).createTable('summaries', function(table) {
      table.increments('id').primary();
      table.string('details');
      table.integer('book_id').unique().references('books.id');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('summaries')
      .dropTable('books');
  };
