const mongoose = require('mongoose');
const HistorySchema = mongoose.Schema({
	id: {
		type: String,
		require: true,
		trin: true
	},

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
	treatment: {
		type: String,
		require: true
	},

	create_at: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('History', HistorySchema);
