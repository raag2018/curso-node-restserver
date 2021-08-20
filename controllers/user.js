const {response} = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const userGet = (req, res = response) => {
					//res.send('Hello class');
		const {q, nombre = 'no name', apikey, page = 1, limit} = req.query;

					res.json({
						msg: 'get controlador',
						q,
						nombre,
						apikey,
						page,
						limit
					});
				}
const userPut = (req, res) => {
	const {id} = req.params;
					res.json({
						msg: 'Hello put controller', 
						id});
				}
const userPost = async (req, res) => {
		
		const {nombre, correo, password, rol} = req.body;
		const usuario = new Usuario({nombre, correo, password, rol});
		//verificar si el correo existe
		
		
		//encriptar la clave
		const salt = bcryptjs.genSaltSync();
		usuario.password = bcryptjs.hashSync(password, salt);
		//guardar en la base de datos
		await usuario.save();
					res.json({
						usuario
					});
				}
const userDelete = (req, res) => {
						res.send('Hello delete controller');
					}
module.exports = {
	userGet, userPut, userPost, userDelete
}