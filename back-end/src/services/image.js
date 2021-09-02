const path = require('path');
const errorObj = require('../utils/errorObj');
const statusCode = require('../utils/statusCode');

const getImage = async (imgName) => {
  try {
    const composedPath = path.resolve(path.resolve(__dirname, `/../images/${imgName}`));
    return composedPath;
  } catch (error) {
    return errorObj('Image name or path doesn`t exists', statusCode.badRequest);
  }
};

module.exports = {
  getImage,
};
