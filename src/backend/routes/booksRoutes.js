const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/', booksController.getBooks);
router.get('/:id', booksController.getBookById);
router.get('/bestrating', booksController.getBestrating);

router.post('/', auth, multer, booksController.createBook);
router.post('/:id/rating', booksController.addRate);


router.put('/:id', booksController.updateBook);

router.delete('/:id', booksController.deleteBook);

module.exports = router;
