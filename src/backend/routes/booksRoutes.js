const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');
const auth = require('../middleware/auth');
const uploadImage = require('../middleware/uploadImage');
const deleteImage = require('../middleware/deleteImage');

router.get('/', booksController.getBooks);
router.get('/bestrating', booksController.getBestRating);
router.get('/:id', booksController.getBookById);

router.post('/', auth, uploadImage, booksController.createBook);
router.post('/:id/rating', auth, booksController.addGrade);


router.put('/:id', auth, uploadImage, deleteImage, booksController.updateBook);

router.delete('/:id', auth, deleteImage, booksController.deleteBook);

module.exports = router;
