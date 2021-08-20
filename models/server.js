require("dotenv").config();
const cors = require('cors');
const express = require("express");
const {dbConnection} = require('../database/config');
class Server{
	constructor(){
		this.app = express();
		this.port = process.env.PORT;
		this.userPath = '/api/usuarios';
		//conectar a la base de datos
		this.conectarDB();
		//middlewares
		this.middlewares();
		//rutas de la aplicacion
		this.routes();
	}
	async conectarDB(){
		await dbConnection();
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