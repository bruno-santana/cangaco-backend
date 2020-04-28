
exports.up = function(knex) {
    return knex.schema.createTable('articles', function(table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('text').notNullable();
        table.binary('media');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        
        table.integer('user_Id').unsigned().index().references('id').inTable('users').notNullable();
        table.integer('bibliography_id').unsigned().index().references('id').inTable('bibliographies');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('articles');
};