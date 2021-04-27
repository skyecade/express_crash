// Bring in express
const express = require('express');

// Intialize instance of express called app
const app = express();

// Set a route
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

// Set port number to be used (system assigned PORT or 5000)
const PORT = process.env.PORT || 5000;

// Set app to listen on assingned PORT
app.listen(PORT, () => console.log(`Server started on port number ${PORT}`));
