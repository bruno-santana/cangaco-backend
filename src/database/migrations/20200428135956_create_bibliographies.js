
exports.up = function(knex) {
    return knex.schema.createTable('bibliographies', function(table) {
        table.increments();
        table.string('source').notNullable();
        table.string('author').notNullable();
        table.string('city').notNullable();
        table.string('year_of_publication').notNullable();
        table.string('publishing_company').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('bibliographies');
};
