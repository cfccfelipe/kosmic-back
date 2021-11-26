const mongoose = require('mongoose');
const ManagersSchema = mongoose.Schema({
	id: {
		type: String,
		require: true,
		trin: true
	},
	name: {
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
		type: Number,
		require: true
	},

	position: {
		type: String,
		require: true,
		trin: true
	},

	bovines: [
		{
			bovine: { type: Schema.ObjectId, ref: 'Bovine' }
		}
	],
	vets: [
		{
			vet: { type: Schema.ObjectId, ref: 'Vet' }
		}
	],

	create_at: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('Manager', ManagersSchema);
