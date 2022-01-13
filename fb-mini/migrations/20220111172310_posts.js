
exports.up = async knex => knex.schema.createTable('posts', table => {
    table
        .uuid('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table
        .uuid('userId')
        .notNullable()
        .references('users.id')

    table
        .string('postContent')
        .notNullable()

    table
        .string('datePosted')
        .notNullable()
});

exports.down = async knex => knex.schema.dropTableIfExists('posts')
