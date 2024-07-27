const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello my delicious exquisite kimchi Koreanitaaaa!! 😗🇰🇷 😗🇲🇽');
})

module.exports = app;
