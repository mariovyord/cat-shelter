const express = require('express');
const router = require('./routes/router');
const hbs = require('express-handlebars');
const initDb = require('./models/db');


// START APP
start();

async function start() {
	const app = express();

	// Connect to DB
	await initDb();

	// Configs
	app.engine('hbs', hbs.create({
		extname: '.hbs',
		helpers: {
			compare: function (str1, str2) {
				return str1 === str2;
			},
		}
	}).engine);
	app.set('view engine', 'hbs');

	// Router
	app.use(router());

	app.listen(3000, () => {
		console.log('App listening on port 3000...');
		console.log('>>> URL: http://localhost:3000');
	});
}
