
exports.up = async knex => knex.schema.createTable('messages', table => {
    table
        .uuid('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table
        .string('messageContent')
        .notNullable()

    table
        .uuid('senderId')
        .notNullable()
        .references('users.id')

    table
        .uuid('recipientId')
        .notNullable()
        .references('users.id')
});

exports.down = async knex => knex.schema.dropTableIfExists('messages')
