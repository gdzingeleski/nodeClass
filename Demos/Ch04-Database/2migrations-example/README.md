
# Chapter 4 Demo: migrations

## Objectives:
* Observe the use of migrations

## Steps

1. IOpen a terminal at this folder.

1. View `package.json` dependencies and run `npm install`

1. View the `knexfile.js` and open the corresponding database with the appropriate client software. Expand to the list of tables and see which tables are present.

1. Execute this from the command line
``` npx knex migrate:make create_products ```

1. Look in the migrations folder at the created file

1. Modify the file with this content which creates a table

    ``` javascript
    exports.up = function(knex, Promise) {
        return knex.schema.createTable('products', function(t) {
            t.increments('id').unsigned().primary();
            t.dateTime('createdAt').notNull();
            t.dateTime('updatedAt').nullable();
            t.dateTime('deletedAt').nullable();

            t.string('name').notNull();
            t.text('decription').nullable();
            t.decimal('price', 6, 2).notNull();
            t.enum('category', ['apparel', 'electronics', 'furniture']).notNull();
        });
    };
    ```

1. Modify the content with a drop table, in case a rollback is needed
    ``` javascript
    exports.down = function(knex, Promise) {
        return knex.schema.dropTable('products');
    };
    ```

1. Run the migration with this command:
```npx knex migrate:latest```

1. Check the DB for 3 tables: knex_migrations, knex_migrate_lock, products

1. Look at the row added to knex_migrations for this migration.

1. Rollback this change:
```npx knex migrate:rollback```

1. The products table should be gone, and the entries in the knex tables will be gone.

1. Use Git icon in VS Code to discard changes to this /Demo directory

