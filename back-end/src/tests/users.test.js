const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /users', () => {
  describe('quando da certo o register', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .post('/users')
        .send({
          name: 'TestTestTest',
          email: 'test@test.com',
          password: '123456'
        });
    });

    it('retorna o codigo de status 201', () => {
      expect(response).to.have.status(201);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "token"', () => {
      expect(response.body).to.have.property('token');
    });
  });

  describe('quando da ja tem o usuario cadastrado', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .post('/users')
        .send({
          name: 'Cliente Zé Birita',
          email: 'zebirita@email.com',
          password: '$#zebirita#$'
        });
    });

    it('retorna o codigo de status 409', () => {
      expect(response).to.have.status(409);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('deve retornar a mensagem com "User already registered"', () => {
      expect(response.body.message).to.be.equal('User already registered');
    });
  });
});

describe('POST /users/admin', () => {
  describe('quando da certo o register', () => {
    let response;

    before(async () => {
      loginResponse = await chai.request(server)
      .post('/login')
      .send({
        email: 'adm@deliveryapp.com',
        password: '--adm2@21!!--'
      })
      .then((result) => result.body.token);

      response = await chai.request(server)
        .post('/users/admin')
        .send({
          name: 'Teste02',
          email: 'teste02@teste.com',
          password: '123456',
          role: 'admin'
        })
        .set('authorization', loginResponse);
    });

    it('retorna o codigo de status 201', () => {
      expect(response).to.have.status(201);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "token"', () => {
      expect(response.body).to.have.property('token');
    });
  });

  describe('quando da ja tem o usuario cadastrado', () => {
    let response;

    before(async () => {
      loginResponse = await chai.request(server)
      .post('/login')
      .send({
        email: 'adm@deliveryapp.com',
        password: '--adm2@21!!--'
      })
      .then((result) => result.body.token);

      response = await chai.request(server)
        .post('/users/admin')
        .send({
          name: 'Cliente Zé Birita',
          email: 'zebirita@email.com',
          password: '$#zebirita#$',
          role: 'seller',
        })
        .set('authorization', loginResponse);
    });

    it('retorna o codigo de status 409', () => {
      expect(response).to.have.status(409);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('deve retornar a mensagem com "User already registered"', () => {
      expect(response.body.message).to.be.equal('User already registered');
    });
  });
});

describe('GET /users', () => {
  describe('pegando todos os users', () => {
    let response;

    before(async () => {
      loginResponse = await chai.request(server)
      .post('/login')
      .send({
        email: 'adm@deliveryapp.com',
        password: '--adm2@21!!--'
      })
      .then((result) => result.body.token);

      response = await chai.request(server)
        .get('/users')
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

describe('DELETE /users', () => {
  describe('deletando um usuario', () => {
    let response;

    before(async () => {
      loginResponse = await chai.request(server)
      .post('/login')
      .send({
        email: 'adm@deliveryapp.com',
        password: '--adm2@21!!--'
      })
      .then((result) => result.body.token);

      response = await chai.request(server)
        .delete('/users/4')
        .set('authorization', loginResponse);
    });

    it('retorna o codigo de status 204', () => {
      expect(response).to.have.status(204);
    });

    it('retorna vazio', () => {
      expect(response.body).to.be.empty;
    });
  });
});