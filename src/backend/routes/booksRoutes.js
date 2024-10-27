const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController.js');

router.get('/', booksController.getBooks);
router.get('/:id', booksController.getBookById);
router.get('/bestrating', booksController.getBestrating);

router.post('/', booksController.addBook);
RouterProvider.post('/:id/rating', booksController.addRate);


router.put('/:id', booksController.deleteBook);

module.exports = router;
