
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.string('token_validation');
        table.string('token_expiration');
    });
};

exports.down = function(knex) {
    return knex.shema.dropTable('users');
};
