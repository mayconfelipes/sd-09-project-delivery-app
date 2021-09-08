const chai = require('chai');
const app = require('../api/app');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = chai;

describe('POST /login', () => {
  describe('Quando os dados estão corretos:', () => {
    let response;

    const user = {
      email: 'adm@deliveryapp.com',
      password: '--adm2@21!!--',
    };

    before(async () => {
      response = await chai.request(app).post('/login').send(user);
    });

    test('Retorna o código de status 200.', () => {
      expect(response).to.have.status(200);
    });
  });
});
