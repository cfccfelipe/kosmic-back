const mongoose = require('mongoose');
const BovinesSchema = mongoose.Schema({
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
	birth: {
		type: Date,
		require: true,
		trin: true
	},
	state: {
		type: String,
		require: true,
		trin: true,
		default: 'Alive'
	},
	history: [
		{
			history: { type: Schema.ObjectId, ref: 'History' }
		}
	],

	create_at: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('Bovine', BovinesSchema);
