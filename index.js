const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT | 3000;

const authRoutes = require('./routes/auth.routes');
const cartRoutes = require('./routes/cart.routes');
const productsRoutes = require('./routes/products.routes');
const usersRoutes = require('./routes/users.routes');

const verifyToken = require('./middlewares/verify-token.middleware');

// Apply body parser for parsing request body
app.use(bodyParser.json());

// Apply cors middleware
app.use(cors());

// Append auth routes
app.use('/auth', authRoutes);

// Append users routes with verification
app.use('/cart', verifyToken, cartRoutes);

// Append products routes
app.use('/products', productsRoutes);

// Append users routes with verification
app.use('/users', verifyToken, usersRoutes);

// Add default message from parent route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to E-Shop API!',
  });
});

// Run server
app.listen(port, () => {
  console.log(`E-Shop App listening on port ${port}`);
});
