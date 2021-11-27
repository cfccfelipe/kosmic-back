const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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
			bovine_id: { type: Schema.ObjectId, ref: 'Bovine' }
		}
	],
	vets: [
		{
			vet_id: { type: Schema.ObjectId, ref: 'Vet' }
		}
	],

	create_at: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('Manager', ManagersSchema);
