const error = (err, _req, res, _next) => {
    if (err.isJoi) {
        return res.status(400).json({
            message: err.details[0].message,
        });
    }

    if (err.isBoom) {
        const { payload } = err.output;
        return res.status(404).json({ message: payload.message, "hasToken": false });
    }
    return res.status(500)
        .json({ message: err.message });
};

module.exports = {
    error,
};