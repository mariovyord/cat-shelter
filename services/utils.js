function catViewModel(cat) {
	return {
		_id: cat._id,
		name: cat.name,
		description: cat.description,
		imageUrl: cat.imageUrl,
		breed: cat.breed,
	}
}

module.exports = {
	catViewModel,
}