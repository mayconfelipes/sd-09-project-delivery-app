const { updateStatus } = require('../services/update');

const mdwUpdateSatatus = async (req, res, next) => {
    try {
        const { saleId, newStatus } = req.body;
        const statusUpdated = await updateStatus(saleId, newStatus);
        return res.status(200).json(statusUpdated);
    } catch (error) {
        return next(error);
    }
};

module.exports = { mdwUpdateSatatus };