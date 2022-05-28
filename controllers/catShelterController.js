module.exports = {
	async get(req, res) {
		req.app.locals.title = 'Shelter Cat';
		req.app.locals.cat = await req.storage.cats.getCatById(req.params.id);
		res.render('catShelter');
	},
	async post(req, res) {
		const _id = req.params.id;
		await req.storage.cats.shelterCat(_id);
		res.redirect('/');
		console.log('Cat Sheltered Succesfully');
	}
};