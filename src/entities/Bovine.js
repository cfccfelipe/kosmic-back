const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BovinesSchema = mongoose.Schema({
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
		default: 'Saludable'
	},
	records: [
		{
			record_id: { type: Schema.ObjectId, ref: 'Record' },
			treatment: { type: String }
		}
	],

	create_at: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('Bovine', BovinesSchema);
