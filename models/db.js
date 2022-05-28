const mongoose = require('mongoose');

// Models
const Cat = require('./Cat');
const Breed = require('./Breed');

const connectionString = 'mongodb://localhost:27017/cat-shelter';

async function initDb() {
	try {
		await mongoose.connect(connectionString, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log('Database connected');

		mongoose.connection.on('error', (err) => {
			console.error('Error connecting to database');
			process.exit(1);
		})
	} catch (err) {
		console.error('Error connecting to database')
		process.exit(1);
	}
}

module.exports = initDb;