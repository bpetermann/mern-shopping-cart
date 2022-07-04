const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(201).json({ message: 'Welcome to the MERN Shopping Cart!' });
});

// Routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/user', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
