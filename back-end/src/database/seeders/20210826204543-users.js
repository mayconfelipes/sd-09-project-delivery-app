module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users',
    [
      {
        email: 'adm@deliveryapp.com',
        id: 1,
        name: 'Delivery App Admin',
        password: 'a4c86edecc5aee06eff8fdeda69e0d04',
        role: 'administrator',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        email: 'fulana@deliveryapp.com',
        id: 2,
        name: 'Fulana Pereira',
        password: '3c28d2b0881bf46457a853e0b07531c6',
        role: 'seller',
        // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        email: 'zebirita@email.com',
        id: 3,
        name: 'Cliente Zé Birita',
        password: '1c37466c159755ce1fa181bd247cb925',
        role: 'customer',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
}