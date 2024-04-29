const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Add middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // Serving static files

// Define some routes
app.get('/welcome', (req, res) => {
  res.send('Welcome to the Jungle!');
});

app.post('/save', (req, res) => {
  // To do: Save some data, for instance to database
  console.log(req.body);
  res.send('Data received!');
});

app.get('/goodbye', (req, res) => {
  res.send("Goodbye, see you then!");
});

app.get('/aurevoir', (req, res) => {
  res.send("Au revoir, see you then!");
});

app.get('/response', (req, res) => {
    res.send(
        {
            "status": "success",
            "data": {
                "id": 123,
                "name": "John Doe",
                "email": "john.doe@example.com",
                "role": "admin",
                "created_at": "2022-01-01T00:00:00Z"
            },
            "message": "User details retrieved successfully"
        }
    );
  });


// Add route for 404 - file not found
app.use(function (req, res, next) {
  res.status(404).send("Sorry, we couldn't find that!")
});

// Define error handling middleware
app.use(function(err, req, res, next) {
  console.error(err.stack) // Log error to server's console
  res.status(500).send('Something went wrong!')
});

module.exports = app; // export the app
