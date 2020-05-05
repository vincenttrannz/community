const { generateHash } = require('authenticare/server')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(
        [
          {
            id: 1, 
            username: 'tranhieunz', 
            password: '12345', 
            email: 'tranhieunz@gmail.com',
            created_at: new Date('2020-05-05 22:04:45'),
          },
          {
            id: 2, 
            username: 'christine.nguyen', 
            password: '54321', 
            email: 'phuongnguyen140889@gmail.com',
            created_at: new Date('2020-05-05 22:04:45'),
          }
        ].map(user =>{
          return generateHash(user.password)
          .then(hash =>{
            user.hash = hash
            delete user.password
            return user
          })
        }))
        .then(users =>{
          return knex('users').insert(users)
        })
    });
};
