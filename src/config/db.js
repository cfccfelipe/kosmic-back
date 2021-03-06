const mongoose = require('mongoose');
//File config mongodb with mongoose library
require('dotenv').config();

const DATABASE_URL = process.env.DB_MONGO;

const connectDb = () => {
	return mongoose.connect(
		DATABASE_URL,
		{ useUnifiedTopology: true, useNewUrlParser: true },
		(err) => {
			if (err) {
				console.log('Connection to Database failed.');
			} else {
				console.log('Database connection successful.');
			}
		}
	);
};
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));

module.exports = connectDb;
