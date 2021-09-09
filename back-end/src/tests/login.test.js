const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /login', () => {
  describe('quando nao tem email', () => {
    let response;

    before(async () => {

    response = await chai.request(server)
      .post('/login')
      .send({
        password: '123456'
      });
    });

    it('retorna o codigo de status 400', () => {
      expect(response).to.have.status(400);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('deve retornar a mensagem com ""email" is required"', () => {
      expect(response.body.message).to.be.equal('"email" is required');
    });
  });

  describe('quando nao tem password', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .post('/login')
        .send({
          email: 'teste@teste.com',
        });
    });

    it('retorna o codigo de status 401', () => {
      expect(response).to.have.status(400);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('deve retornar a mensagem com ""password" is required"', () => {
      expect(response.body.message).to.be.equal('"password" is required');
    });
  });

  describe('quando da certo o login', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .post('/login')
        .send({
          email: 'zebirita@email.com',
          password: '$#zebirita#$'
        });
    });

    it('retorna o codigo de status 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "token"', () => {
      expect(response.body).to.have.property('token');
    });
  });
});