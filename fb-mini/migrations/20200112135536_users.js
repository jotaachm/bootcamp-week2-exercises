exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('firstName')
    .notNullable()

  table
    .string('lastName')
    .notNullable()

  table
    .string('userName')
    .notNullable()

  table
    .date('dob')
    .notNullable()

  table
    .string('email')
    .unique()
    .notNullable()

  table
    .string('phone')
    .unique()
    .notNullable()

  table
    .string('password')
    .notNullable()

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
