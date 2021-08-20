const {Schema, model} = require('mongoose');
const RoleSchema = Schema({
	rol: {
		type: String,
		required: [true, 'el rol es obliaorio']
	}
});
module.exports = model('Role', RoleSchema);