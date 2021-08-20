const Role = require('../models/role');
const Usuario = require('../models/usuario');
const esRoleValido = async(rol = '') => {
	const existRol = await Role.findOne({rol});
	if(!existRol){
		throw new Error(`El rol ${rol} no existe en la bdd`);
	}
}

const existEmail = async(correo = '') => {
	const email = await Usuario.findOne({correo});
	if(email){
			throw new Error(`El correo ${correo} ya existe `);
		}
}
module.exports = {esRoleValido, existEmail}