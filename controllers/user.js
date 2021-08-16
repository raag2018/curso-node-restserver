const {response} = require('express');
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
const userPost = (req, res) => {
		const {nombre, edad} = req.body;

					res.json({
						msg: 'post api userController',
						nombre, edad
					});
				}
const userDelete = (req, res) => {
						res.send('Hello delete controller');
					}
module.exports = {
	userGet, userPut, userPost, userDelete
}