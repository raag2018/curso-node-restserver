const {userGet,userPut, userPost, userDelete} = require('../controllers/user');
const {Router} = require('express');
const {check} = require("express-validator");
const {validarCampos} = require('../middlewares/validar-campos');
const {esRoleValido, existEmail} = require('../helpers/db-validators');
const router = Router();
router.get('/', userGet);
router.put('/:id', userPut);
router.post('/', 
	[
		check('nombre', 'El nombre es obligatorio').not().isEmpty(),
		check('password', 'La clave es obligatoria, con una longitud de 6 caracteres').isLength({min: 6}),
		check('correo', 'el correo no es valido').isEmail(),
		check('correo').custom(existEmail),
		check('rol').custom(esRoleValido),
		//check('rol', 'No es un rol permitido').isIn(['ADMIN_ROLE','USER_ROLE']),
		validarCampos
	]
	,userPost);
router.delete('/', userDelete);
module.exports = router;