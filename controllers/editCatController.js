module.exports = {
	async get(req, res) {
		req.app.locals.title = 'Edit Cat';
		const [cat, breeds] = await Promise.all([
			req.storage.cats.getCatById(req.params.id),
			req.storage.breeds.getAllBreeds(),
		]);
		req.app.locals.cat = cat;
		req.app.locals.breeds = breeds;
		res.render('editCat');

	},
	post(req, res) {
		req.storage.cats.editCatById(req.params.id, req.body);
		console.log('Edit Succesful');
		res.redirect('/');
	}
};