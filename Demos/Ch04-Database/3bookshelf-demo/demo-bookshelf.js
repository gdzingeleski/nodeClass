'use strict';

const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));
var bookshelf = require('bookshelf')(db);

var Book = bookshelf.Model.extend({
  tableName: 'books',
  summary: function() {
    return this.hasOne(Summary);
  }
});

var Summary = bookshelf.Model.extend({
  tableName: 'summaries',
  book: function() {
    return this.belongsTo(Book);
  }
});


//save does an update or insert
new Book({title: 'Atlas Shrugged'})
    .save()
    .then(function(model) {
      // ...
    });

// select * from `books` where `id` = '1'
new Book({'id': 1})
  .fetch()
  .then(function(model) {
    // outputs 'Atlas Shrugged'
    console.log(model.get('title'));
  });

  