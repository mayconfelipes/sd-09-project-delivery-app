const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /sales', () => {
  describe('cadastrando um produto', () => {
    let response;

    before(async () => {
      loginResponse = await chai.request(server)
      .post('/login')
      .send({
        email: 'zebirita@email.com',
        password: '$#zebirita#$'
      })
      .then((result) => result.body.token);

      response = await chai.request(server)
        .post('/sales')
        .send({
          "deliveryAddress": "TESTE TESTE",
          "deliveryNumber": "123",
          "sellerId": 2,
          "totalPrice": 13.20,
          "userId": 3,
          "products": [
            {
              "id": 1,
              "quantity": 3
            }
          ]
        })
        .set('authorization', loginResponse);;
    });

    it('retorna o codigo de status 201', () => {
      expect(response).to.have.status(201);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "deliveryAddress"', () => {
      expect(response.body).to.have.property('deliveryAddress');
    });
  });
});

describe('GET /sales', () => {
  describe('pegando todos as compras', () => {
    let response;

    before(async () => {
      loginResponse = await chai.request(server)
      .post('/login')
      .send({
        email: 'zebirita@email.com',
        password: '$#zebirita#$'
      })
      .then((result) => result.body.token);

      response = await chai.request(server)
        .get('/sales')
        .set('authorization', loginResponse);
    });

    it('retorna o codigo de status 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('array');
    });
  });
});

describe('GET /sales/:id', () => {
  describe('pegando uma compra', () => {
    let response;

    before(async () => {
      loginResponse = await chai.request(server)
      .post('/login')
      .send({
        email: 'zebirita@email.com',
        password: '$#zebirita#$'
      })
      .then((result) => result.body.token);

      response = await chai.request(server)
        .get('/sales/1')
        .set('authorization', loginResponse);
    });

    it('retorna o codigo de status 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "deliveryAddress"', () => {
      expect(response.body).to.have.property('deliveryAddress');
    });
  });

  describe('pegando compra que nao existe', () => {
    let response;

    before(async () => {
      loginResponse = await chai.request(server)
      .post('/login')
      .send({
        email: 'zebirita@email.com',
        password: '$#zebirita#$'
      })
      .then((result) => result.body.token);

      response = await chai.request(server)
        .get('/sales/10')
        .set('authorization', loginResponse);
    });

    it('retorna o codigo de status 404', () => {
      expect(response).to.have.status(404);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('deve retornar a mensagem com "Sale does not exist"', () => {
      expect(response.body.message).to.be.equal('Sale does not exist');
    });
  });
});

describe('PUT /sales/:id', () => {
  describe('pegando uma compra', () => {
    let response;

    before(async () => {
      loginResponse = await chai.request(server)
      .post('/login')
      .send({
        email: 'fulana@deliveryapp.com',
        password: 'fulana@123'
      })
      .then((result) => result.body.token);

      response = await chai.request(server)
        .put('/sales/1')
        .send({
          status: 'Preparando'
        })
        .set('authorization', loginResponse);
    });

    it('retorna o codigo de status 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "deliveryAddress"', () => {
      expect(response.body).to.have.property('deliveryAddress');
    });
  });

  describe('pegando compra que nao existe', () => {
    let response;

    before(async () => {
      loginResponse = await chai.request(server)
      .post('/login')
      .send({
        email: 'fulana@deliveryapp.com',
        password: 'fulana@123'
      })
      .then((result) => result.body.token);

      response = await chai.request(server)
        .put('/sales/15')
        .send({
          status: 'Preparando'
        })
        .set('authorization', loginResponse);
    });

    it('retorna o codigo de status 404', () => {
      expect(response).to.have.status(404);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('deve retornar a mensagem com "Sale does not exist"', () => {
      expect(response.body.message).to.be.equal('Sale does not exist');
    });
  });
});