import jwt from 'jsonwebtoken';

export default (token) => jwt.decode(token);
