const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
	
	djName:{
		type: String,
	},

	firstName:{
		type: String
	},

	lastName:{
		type: String,
	},

	email:{
		type: String,
	},
    contactNumber:{
		type: Number,
	},
    instagramUsername:{
		type: String,
	},
	customername:{
		type: Boolean,
	},
	platformname:{
		type: Boolean,
	},
});

module.exports = mongoose.model('User', userSchema);