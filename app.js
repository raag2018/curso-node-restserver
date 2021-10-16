require("dotenv").config();
const Server =  require('./models/server');
const server = new Server();
//prueba de cambio a la ssh
server.listen();
