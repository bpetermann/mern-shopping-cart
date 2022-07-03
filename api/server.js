const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.status(201).json({ message: 'Welcome to the MERN Shopping Cart!' });
});

// Routes
app.use('/api/shop', require('./routes/shopRoutes'));
app.use('/api/user', require('./routes/userRoutes'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
