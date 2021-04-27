// Bring in express and other node modules
const express = require('express');
const path = require('path');

// Intialize instance of express called app
const app = express();

// Set a route
app.get('/test', (req, res) => {
    res.send('<h1>TEST</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>This is all about me</h1>');
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set port number to be used (system assigned PORT or 5000)
const PORT = process.env.PORT || 5000;

// Set app to listen on assingned PORT
app.listen(PORT, () => console.log(`Server started on port number ${PORT}`));
