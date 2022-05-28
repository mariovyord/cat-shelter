module.exports = {
	async get(req, res) {
		req.app.locals.title = 'Add Cat';
		req.app.locals.breeds = await req.storage.breeds.getAllBreeds();
		res.render('addCat');
	},
	async post(req, res) {
		try {
			await req.storage.cats.addCat(req.body);
			res.redirect('/');
		} catch (err) {
			console.error(err.message);
			res.redirect('/add-cat');
		}
	}
};