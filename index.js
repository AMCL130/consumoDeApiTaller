require('dotenv').config();

const Server=require('../Apis/model/server')
const server= new Server();

server.listen();

const port= 8087