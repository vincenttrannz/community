
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {
          id: 1, 
          image_url: 'https://i.imgur.com/lghsexv.jpg',
          gender: 'Mr', 
          first_name: 'Vincent', 
          last_name: 'Tran',
          birthday: '21/03/1991', 
          address: '6A/57 Manners street, Te Aro', 
          city: 'Wellington', 
          phone: '0221575362', 
          zipCode: 6011, 
          task_id: 1
        },
        {
          id: 2, 
          image_url: 'https://i.imgur.com/ruTFu5i.jpg', 
          gender: 'Mr',
          first_name: 'Hieu', 
          last_name: 'Tran',
          birthday: '21/03/1991', 
          address: '4E/107 Manners street, Te Aro', 
          city: 'Auckland', 
          phone: '0221575362', 
          zipCode: 6021, 
          task_id: 2
        },
      ]);
    });
};
