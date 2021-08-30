import client from 'socket.io-client';

const io = client('http://localhost:3001');

export default io;
