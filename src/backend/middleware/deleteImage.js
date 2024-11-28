const Book = require("../models/book")
const path = require("path");
const fs = require("fs");

const IMAGE_DIR = "./images";

module.exports = (req, res, next) => {
    Book.findOne({ _id: req.params.id })
        .then(book => {
            const filename = path.basename(book.imageUrl);
            const imagePath = path.join(__dirname, "..", "images", filename);
            fs.unlink(imagePath, (error) => {
                if (error) {
                    res.status(500).json({ error });
                } else {
                    next();
                }
            });
        })
        .catch(error => res.status(400).json({ error }));
};