module.exports = {
	async get(req, res) {
		req.app.locals.title = 'Upload Image';
		res.render('uploadImage');

	},
	post(req, res) {
		console.log(req.body);
		let body = ''
		req.on('data', (err, data) => {
			body += data;
		})
		req.on('end', (err, data) => {
			console.log('END >>>', data);
		})
		res.redirect('/');
	}
};