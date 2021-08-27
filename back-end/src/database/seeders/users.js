
module.exports = {
    up: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkInsert("Users", [
        {
          id: 1,
          name: "Delivery App Admin",
          email: 'adm@deliveryapp.com',
          password: '123456',
          role: 'administrator',
          
        },
        {
          id: 2,
          name: "Fulana Pereira",
          email: 'fulana@deliveryapp.com',
          password: '123456',
          role: 'seller',
          
        },
        {
          id: 3,
          name: "Cliente Zé Birita",
          email: 'zebirita@email.com',
          password: '123456',
          role: 'customer',
          
        },
      ],{timestamp:false});
    },
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete("Users", null, {});
    },
  };
  