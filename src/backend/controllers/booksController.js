exports.getBooks = (req, res) => {
    const books = [];

    res.status(201).json({books});
};

exports.getBookById = (req, res) => {
    const book = null;

    res.status(201).json({book});
}

exports.getBestrating = (req, res) => {
    const books= [];

    res.status(201).json({books});
}

exports.addBook = (req, res) => {
    const {book, image} = req.body;

    if (!book || !image) {
        return res.status(400).json({ message: 'Book and image are required' });
    }

    res.status(201).json({ message: 'Book registered successfully' });
}

exports.deleteBook = (req, res) => {
    res.status(201).json({ message: 'Book deleted successfully' });
}

exports.addRate = (req, res) => {
    const {userId, Number} = req.body;
    const book = null;
    
    res.status(201).json({book});
}