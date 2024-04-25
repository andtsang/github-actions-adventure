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

// Add route for 404 - file not found
app.use(function (req, res, next) {
  res.status(404).send("Sorry, we couldn't find that!")
});

// Define error handling middleware
app.use(function(err, req, res, next) {
  console.error(err.stack) // Log error to server's console
  res.status(500).send('Something went wrong!')
});

// Start the app
app.listen(port, () => {
console.log(`App is running on port ${port}`);
});

module.exports = app; // export the app