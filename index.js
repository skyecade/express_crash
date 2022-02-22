// Bring in express and other node modules
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');

// Intialize instance of express called app
const app = express();

// Init Middleware
// app.use(logger);
 
// Handlebars Middleware
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Homepage Route
app.get('/', (req, res) => res.render('index'));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

// Set port number to be used (system assigned PORT or 5000)
const PORT = process.env.PORT || 5000;

// Set app to listen on assingned PORT
app.listen(PORT, () => console.log(`Server started on port number ${PORT}`));
