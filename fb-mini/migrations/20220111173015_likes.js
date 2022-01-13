
exports.up = async knex => knex.schema.createTable('likes', table => {
    table
        .uuid('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table
        .uuid('likerId')
        .notNullable()
        .references('users.id')

    table
        .uuid('postId')
        .notNullable()
        .references('posts.id')
});

exports.down = async knex => knex.schema.dropTableIfExists('likes')

