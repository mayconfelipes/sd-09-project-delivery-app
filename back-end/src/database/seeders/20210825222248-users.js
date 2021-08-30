module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        name: 'Monkey D. Luffy',
        email: 'luffy@mugiwara.com',
        password: '123456',
        role: 'user',
      },
      {
        id: 2,
        name: 'Roronoa Zoro',
        email: 'zoro@mugiwara.com',
        password: '123456',
        role: 'user',
      },
      {
        id: 3,
        name: 'Tony Tony Chopper',
        email: 'chopper@mugiwara.com',
        password: '123456',
        role: 'seller',
      },
      ], { timestamps: false });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};