const Breed = require('../models/Breed');

async function getAllBreeds() {
	const breeds = await Breed.find({});
	return breeds.map(x => x.name);
}

async function addBreed(breedName) {
	const breed = new Breed({ name: breedName });
	breed.save();
}

module.exports = () => (req, res, next) => {
	if (req.storage === undefined) {
		req.storage = {};
	}
	req.storage.breeds = {
		getAllBreeds,
		addBreed,
	}
	next();
}