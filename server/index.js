const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('../config.js');

const app = express();

const port = process.env.PORT || config.port;
const url = `http://localhost:${3009}`;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/rooms/:roomId/reviews', (req, res) => {
  console.log('EXPRESS GET SUCCESS');
  res.send('EXPRESS NODE GET SUCCESS');
})

app.listen(port, () => {
  console.log(`Listening at ${url}`);
});
console.log('node works in root');
