// Products service - leitura de um produto especifico pelo atributo 'id' na tabela 'products'.

const { product } = require('../../database/models');

const getAllProducts = async () => product.findAll({});

const getProductById = async (id) => product.findOne({ where: { id } });

module.exports = { getAllProducts, getProductById };
