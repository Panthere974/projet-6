//sBtVdJHunGepzYJe
const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb+srv://Projet6:sBtVdJHunGepzYJe@projet6.9mqa16z.mongodb.net/?retryWrites=true&w=majority&appName=Projet6',
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
const authRoutes = require('./routes/authRoutes');
const booksRoutes = require('./routes/booksRoutes');

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/auth', authRoutes);
app.use('/api/books', booksRoutes);

module.exports = app;