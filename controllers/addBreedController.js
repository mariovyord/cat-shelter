module.exports = {
	get(req, res) {
		req.app.locals.title = 'Add Breed';
		res.render('addBreed');
	},
	async post(req, res) {
		await req.storage.breeds.addBreed(req.body.breed);
		res.redirect('/');
	}
};