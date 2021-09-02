const express = require('express');
const mdwImage = require('../middlewares/mdwImage');

const imageRouter = express.Router();

imageRouter.get('/:imgName', mdwImage.findImage);

module.exports = imageRouter;