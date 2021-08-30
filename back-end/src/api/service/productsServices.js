// Products service - leitura de um produto especifico pelo atributo 'id' na tabela 'products'.

const { product } = require('../../database/models');

const getAllProducts = async () => await product.findAll({});

const getProductById = async (id) => await product.findOne({ where: { id } });

module.exports = { getAllProducts, getProductById };
