const Cat = require('../models/Cat');
const { catViewModel } = require('./utils');

async function getAllCats() {
	const cats = await Cat.find({});
	return cats.map(catViewModel)
}

async function getCatById(_id) {
	const cat = await Cat.findById(_id);
	return catViewModel(cat);
}

async function editCatById(_id, cat) {
	try {
		await Cat.findByIdAndUpdate(_id, cat);
	} catch (err) {
		console.error(err.message);
	}
}

async function addCat(obj) {
	const cat = new Cat(obj);
	try {
		await cat.save();
	} catch (err) {
		throw new Error(err.message);
	}
}

async function shelterCat(_id) {
	try {
		await Cat.deleteOne({ _id: _id });
	} catch (err) {
		console.error(err.message);
	}
}

module.exports = () => (req, res, next) => {
	if (req.storage === undefined) {
		req.storage = {};
	}
	req.storage.cats = {
		getAllCats,
		getCatById,
		editCatById,
		addCat,
		shelterCat,
	}
	next();
}