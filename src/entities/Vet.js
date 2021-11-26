const mongoose = require('mongoose');
const VetsSchema = mongoose.Schema({
	id: {
		type: String,
		require: true,
		trin: true
	},
	fullname: {
		type: String,
		require: true,
		trin: true
	},
	email: {
		type: String,
		require: true,
		trin: true,
		unique: true
	},
	phone: {
		type: String,
		require: true,
		trin: true,
		unique: true
	},

	clinic: {
		type: String,
		require: true,
		trin: true,
		unique: true
	},

	create_at: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('Vet', VetsSchema);
