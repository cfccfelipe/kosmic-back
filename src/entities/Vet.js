const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const VetsSchema = mongoose.Schema({
	id: {
		type: String,
		require: true,
		trin: true
	},
	fullname: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true,
		trin: true,
		unique: true
	},
	phone: {
		type: Number,
		require: true,
		unique: false
	},

	clinic: {
		type: String,
		trin: true,
		require: true,
		unique: false
	},

	create_at: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('Vet', VetsSchema);
