require("dotenv").config();
const cors = require('cors');
const express = require("express");

class Server{
	constructor(){
		this.app = express();
		this.port = process.env.PORT;
		this.userPath = '/api/usuarios';
		//middlewares
		this.middlewares();
		//rutas de la aplicacion
		this.routes();
	}
	middlewares(){
		//cors
		this.app.use(cors());
		//lectura y parseo del body
		this.app.use(express.json());
		//directorio publico
		this.app.use(express.static('public'));
	}
	routes(){
		this.app.use(this.userPath, require('../routes/user'));
	}
	listen(){
		this.app.listen(this.port, () => {
			console.log('servidor en el puerto', this.port);
		});
	}
}
module.exports = Server;