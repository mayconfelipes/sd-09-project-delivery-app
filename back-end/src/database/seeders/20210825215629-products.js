module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('products', [
    {
      name: 'Skol Lata 250ml',
      price: 2.20,
      url_image: 'http://localhost:3001/images/skol_lata_350ml.jpg'
    },
    {
      name: 'Heineken 600ml',
      price: 7.50,
      url_image: 'http://localhost:3001/images/heineken_600ml.jpg'
    },
    {
      name: 'Antarctica Pilsen 300ml',
      price: 2.49,
      url_image: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg'
    },
    {
      name: 'Brahma 600ml',
      price: 7.50,
      url_image: 'http://localhost:3001/images/brahma_600ml.jpg'
    },
    {
      name: 'Skol 269ml',
      price: 2.19,
      url_image: 'http://localhost:3001/images/skol_269ml.jpg'
    },
    {
      name: 'Skol Beats Senses 313ml',
      price: 4.49,
      url_image: 'http://localhost:3001/images/skol_beats_senses_313ml.jpg'
    },
  ]),

  down: async (queryInterface) => queryInterface.bulkDelete('products', null, {}),
};




// (7, 'Becks 330ml',4.99, 'http://localhost:3001/images/becks_330ml.jpg'),
// (8, 'Brahma Duplo Malte 350ml',2.79, 'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg'),
// (9, 'Becks 600ml',8.89, 'http://localhost:3001/images/becks_600ml.jpg'),
// (10, 'Skol Beats Senses 269ml',3.57, 'http://localhost:3001/images/skol_beats_senses_269ml.jpg'),
// (11, 'Stella Artois 275ml',3.49, 'http://localhost:3001/images/stella_artois_275ml.jpg');
