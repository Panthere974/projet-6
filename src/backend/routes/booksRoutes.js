const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/', booksController.getBooks);
router.get('/bestrating', booksController.getBestRating);
router.get('/:id', booksController.getBookById);

router.post('/', auth, multer, booksController.createBook);
router.post('/:id/rating', auth, booksController.addGrade);


router.put('/:id', auth, booksController.updateBook);

router.delete('/:id', auth, booksController.deleteBook);

module.exports = router;
