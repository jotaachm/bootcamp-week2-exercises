
exports.up = async knex => knex.schema.createTable('friends', table => {
    table
        .uuid('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table
        .uuid('requestorId')
        .notNullable()
        .references('users.id')

    table
        .uuid('requestedId')
        .notNullable()
        .references('users.id')

    table
        .string('dateRequested')
        .notNullable()

    table
        .enum('status', ['accepted', 'rejected', 'pending'])
        .notNullable()
});

exports.down = async knex => knex.schema.dropTableIfExists('friends')
