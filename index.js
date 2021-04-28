// Bring in express and other node modules
const express = require('express');
const path = require('path');
const members = require('./Members');

// Intialize instance of express called app
const app = express();



// Setting a routes

// This route gets all members
app.get('/api/members', (req, res) => res.json(members));


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set port number to be used (system assigned PORT or 5000)
const PORT = process.env.PORT || 5000;

// Set app to listen on assingned PORT
app.listen(PORT, () => console.log(`Server started on port number ${PORT}`));
