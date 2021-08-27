const { users } = require('../database/models');
const validatorJoi = require('../utils/validatorJoi');
const md5HashCreate = require('../utils/hashMd5');

const findOneUser = async (name, email) => {
  const dataName = await users.findOne({ where: { name } });
  const dataEmail = await users.findOne({ where: { email } });
  if (!dataEmail && !dataName) return '';
  const dataFound = dataName || dataEmail;
  return dataFound;
};

const saveOneUser = async (name, email, password, role) => {
  const validData = validatorJoi.verifierSchemaRegister(name, email, password, role);
  if (validData.message) return validData;
  const passHashed = md5HashCreate(password);
  const roleValue = role || 'customer';
  const userCreated = await users.create({ name, email, password: passHashed, role: roleValue });
  return userCreated.dataValues;
};

module.exports = {
  findOneUser,
  saveOneUser,
};
