const express = require('express');

const app = express();

app.get('/', (req, res) => {
  // res.send('<h1>Hello from Express</h1>');
  res.send({
    name: 'Andrew',
    likes: [
      'Biking',
      'Cities'
    ]
  });
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/bad', (req, res) => {
    res.send({
      errorMessage: 'Unknown request'
    });
});

app.listen(3000);
