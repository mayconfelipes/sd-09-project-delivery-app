const { sales } = require('../database/models');

const createSale = async (sale) => {
    const saleCreated = await sales.create(sale);
    return saleCreated;
};

module.exports = {
    createSale,
};