module.exports = {
	async homeController(req, res) {
		try {
			const cats = await req.storage.cats.getAllCats();
			req.app.locals.title = 'Home';
			req.app.locals.cats = cats;
			res.render('index');
		} catch (err) {
			console.error(err.message);
			process.exit(1);
		}
	}
}