const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/welcome', (req, res) => {
  res.send('Welcome to the Jungle!');
});

module.exports = app;  // export the app