const express = require('express');
const router = express.Router();

const addBreedController = require('../controllers/addBreedController');
const addCatController = require('../controllers/addCatController');
const catShelterController = require('../controllers/catShelterController');
const editCatController = require('../controllers/editCatController');
const { homeController } = require('../controllers/homeContoller');
const uploadImageController = require('../controllers/uploadImageController');

const requestLogger = require('../middlewares/requestLogger');
const breedsService = require('../services/breedsService');
const catsService = require('../services/catsService');

// Middleware
router.use(express.urlencoded({ extended: true }));
router.use(requestLogger());
router.use(catsService());
router.use(breedsService());
router.use('/content', express.static('public'));

// Routes
router.get('/', homeController);

router.route('/add-breed')
	.get(addBreedController.get)
	.post(addBreedController.post);

router.route('/add-cat')
	.get(addCatController.get)
	.post(addCatController.post);

router.route('/edit-cat/:id')
	.get(editCatController.get)
	.post(editCatController.post);

router.route('/cat-shelter/:id')
	.get(catShelterController.get)
	.post(catShelterController.post);

router.route('/upload-image')
	.get(uploadImageController.get)
	.post(uploadImageController.post);

module.exports = () => router;