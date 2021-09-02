const { createHash } = require('crypto');

const encryptData = (data) => createHash('md5').update(data).digest('hex');

export default encryptData;
