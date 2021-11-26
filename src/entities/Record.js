const mongoose = require('mongoose');
const RecordsSchema = mongoose.Schema({
	event_date: {
		type: Date,
		require: true,
		trin: true
	},
	temperature: {
		type: Number,
		require: true
	},
	heart_rate: {
		type: Number,
		require: true
	},
	breathing_rate: {
		type: Number,
		require: true
	},

	create_at: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('Record', RecordsSchema);
