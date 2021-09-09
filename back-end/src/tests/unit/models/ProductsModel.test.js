// Simula a conexão com o DB
// const sinon = require('sinon');
// const { expect } = require('chai');
// const { MongoClient } = require('mongodb');

// const ProductsModel = require('../../../database/models/products');


/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
*/


// const MoviesModel = {
//   create: () => {}
// };

// describe('Insere um novo produto no DB', () => {
//   const payloadProduct = {
//     name: 'Example Product',
//     price: 1.99,
//     url_image: "http://localhost:3001/images/product_example.jpg",
//   }

//   before(() => {
//     const ID_EXAMPLE = '604cb554311d68f491ba5781';
//     const connectionMock = {
//       db: async () => ({
//         collection: async () => ({
//           insertOne: async () => ({
//             insertedId: ID_EXAMPLE,
//           })
//         })
//       })
//     };

//     sinon.stub(MongoClient, 'connect').resolves(connectionMock);
//   });

//   // Restauraremos a função `connect` original após os testes.
//   after(() => {
//     MongoClient.connect.restore();
//   });

//   describe('quando é inserido com sucesso', () => {

//     it('retorna um objeto', async () => {
//       const response = await ProductsModel.create(payloadProduct);

//       expect(response).to.be.a('object')
//     });

//     it('tal objeto possui o "id" do novo produto inserido', async () => {
//       const response = await ProductsModel.create(payloadProduct);

//       expect(response).to.have.a.property('id')
//     });

//   });
// });
