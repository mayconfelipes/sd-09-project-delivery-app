const { sales } = require('../database/models');

const updateStatus = async (saleId, newStatus) => {
    const statusUpdated = await sales.update({ status: newStatus }, { where: { id: saleId } });
    return statusUpdated;
};

module.exports = {
    updateStatus,
};