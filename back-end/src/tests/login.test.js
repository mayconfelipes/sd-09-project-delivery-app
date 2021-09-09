const chai = require('chai');
// const sinon = require('sinon');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../api/app');

const { expect } = chai;

describe('POST /login', () => {
  describe('Quando email e password não são informados:', () => {
    let response;

    before(async () => {
      response = await chai.request(app)
        .post('/login')
        .send({});
    });

    it('Retorna o status HTTP 400', () => {
      expect(response).to.have.status(400);
    });

    it('Retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });

    it('O objeto possui uma propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('A propriedade "message" possui uma mensagem de erro adequada', () => {
      expect(response.body.message).to.be.equal('"email" is required');
    });
  });

  describe('Quando o email não existe no banco:', () => {
    let response;

    before(async () => {
      response = await chai.request(app)
        .post('/login')
        .send({
          email: 'fake@email.com',
          password: 'password-fake'
        });
    });

    after(() => {
    });

    it('Retorna o status HTTP 404', () => {
      expect(response).to.have.status(404);
    });

    it('Retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });

    it('O objeto possui uma propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });
    it('A propriedade "message" possui uma mensagem de erro adequada', () => {
      expect(response.body.message).to.equal('Invalid data');
    });
  });

  describe('Quando o login é realizado com sucesso:', () => {
    let response;

    const user = {
      email: 'adm@deliveryapp.com',
      password: '--adm2@21!!--',
    };

    before(async () => {
      response = await chai.request(app).post('/login').send(user);
    });

    it('Retorna o código de status 200.', () => {
      expect(response).to.have.status(200);
    });

    it('Retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });

    it('O objeto retornado não é vazio', () => {
      expect(response.body).to.be.is.not.empty;
    });    
  });
});
