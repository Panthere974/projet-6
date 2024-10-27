const Book = require('../models/book');

exports.getBooks = (req, res) => {
    Book.find()
        .then(books => res.status(200).json(books))
        .catch(error => res.status(400).json({ error }));
};

exports.getBookById = (req, res, next) => {
    Book.findOne({ _id: req.params.id })
        .then(book => res.status(200).json(book))
        .catch(error => res.status(404).json({ error }));
}

exports.getBestrating = (req, res) => {
    const books= [];

    res.status(201).json({books});
}

exports.createBook = (req, res, next) => {
    const bookData = JSON.parse(req.body.book);
    const book = new Book({
        ...bookData,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    console.log(book);
    book.save()
        .then(() => res.status(201).json({ message: 'Book created successfully' }))
        .catch(error => res.status(400).json({ error }));
}

exports.updateBook = (req, res, next) => {
    Book.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Book updated successfully'}))
        .catch(error => res.status(400).json({ error }));
}

exports.deleteBook = (req, res, next) => {
    Book.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Book deleted successfully'}))
        .catch(error => res.status(400).json({ error }));
}

exports.addGrade = (req, res, next) => {
    const {userId, rating} = req.body;

    if (rating < 0 || rating > 5) {
        res.status(400).json({ message: 'Bad value' });
        return;
    }
    
    
    Book.findOne({ _id: req.params.id })
        .then(book => {
            if (book.ratings.find(rating => rating.userId === userId)) {
                res.status(400).json({ message: 'Grade already exist' });
                return;
            }
            book.ratings.push({userId, grade: rating});
            console.log(book);
            book.save()
                .then(() => res.status(200).json(book))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(404).json({ error }));
}