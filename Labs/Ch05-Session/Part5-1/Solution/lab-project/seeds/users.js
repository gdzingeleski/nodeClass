
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      // Inserts seed entries
      return knex('users').insert([
        {username: 'user', password: 'pass' },
        {username: 'judy', password: '1111' }
      ]);
    });
};
