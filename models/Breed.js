const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;
const Types = mongoose.Types;

const breedSchema = new Schema({
	name: { type: String, required: true },
});

const Breed = model('Breed', breedSchema);

module.exports = Breed;