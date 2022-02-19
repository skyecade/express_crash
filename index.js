// Bring in express and other node modules
const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

// Intialize instance of express called app
const app = express();

// Init Middleware
// app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

// Set port number to be used (system assigned PORT or 5000)
const PORT = process.env.PORT || 5000;

// Set app to listen on assingned PORT
app.listen(PORT, () => console.log(`Server started on port number ${PORT}`));
