const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;
const Types = mongoose.Types;

const catSchema = new Schema({
	name: { type: String, required: true, unique: true },
	description: { type: String, required: true },
	imageUrl: { type: String, required: true },
	breed: { type: String, required: true },
});

const Cat = model('Cat', catSchema);

module.exports = Cat;