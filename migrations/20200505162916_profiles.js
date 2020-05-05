exports.up = function(knex) {
  return knex.schema.createTable('profiles', (table)=>{
    table.increments('id').primary()
    table.string('image_url')
    table.string('gender')
    table.string('first_name', 30)
    table.string('last_name', 30)
    table.date('birthday')
    table.string('address', 100)
    table.string('city', 30)
    table.float('phone')
    table.integer('zipCode')
    table.integer('task_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('profiles')
};
