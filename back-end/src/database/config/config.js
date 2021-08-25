require('dotenv').config();
const options = {
  host: process.env.MYSQL_HOST, 
  port: process.env.MYSQL_PORT ,
  database: process.env.MYSQL_DB_NAME ,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
    database: `${options.database}-dev`,
  },
  test: {
    ...options,
    database: `${options.database}-test`,
  },
  production: {
    ...options,
  },
};