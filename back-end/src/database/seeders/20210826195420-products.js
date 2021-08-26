module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Products',
      [{
        id: 1,
        name: 'Heineken',
        price: 15,
        url_image: 'https://www.heineken.com/media-la/01pfxdqq/heineken-original-bottle.png?quality=85',
      },
      {
        id: 2,
        name: 'Nossa',
        price: 10,
        url_image: 'https://www.ambev.com.br/conteudo/uploads/2019/03/nossa_1l.png',
      },
      {
        id: 3,
        name: 'Stella Artois',
        price: 15,
        url_image: 'https://trimais.vteximg.com.br/arquivos/ids/1000734-1000-1000/foto_original.jpg?v=637395773159330000',
      },
      {
        id: 4,
        name: 'Budweiser',
        price: 15,
        url_image: 'https://www.emporiosaoroque.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/u/budweiser.png',
      },
      ], { timestamps: false });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};