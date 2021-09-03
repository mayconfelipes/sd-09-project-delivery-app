const ImageService = require('../services/image');
const errorObj = require('../utils/errorObj');
const statusCode = require('../utils/statusCode');

const findImage = async (req, res, next) => {
  try {
    const { imgName } = req.params;
    const data = await ImageService.getImage(imgName);
    if (data.message) throw data;
    return res.status(200).sendFile(data, (error) => {
      if (error) {
        next(errorObj('Image name or path doesn`t exists', statusCode.badRequest));
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findImage,
};