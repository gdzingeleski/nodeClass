
const scryptForHumans = require("scrypt-for-humans");

exports.up = function(knex, Promise) {
    return knex.schema.table("users", function(table){
        table.string("hash");
    })
    // .update({
    //     'hash': scryptForHumans.hash('hash')
    //   })
    // .catch((err) => {
    //     console.log(err);
    // });
  // rather you'll want to just create the hash column, make it allow NULL values, then run a query afterwards that goes through each row, fetches its password value, hashes it, and stores the result back in the hash column



};

exports.down = function(knex, Promise) {
    return knex.schema.table("users", function(table){
        table.dropColumn("hash");
    })
};
