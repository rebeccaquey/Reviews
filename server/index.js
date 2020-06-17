const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3009;
const url= `http://localhost:${3009}`;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));



app.listen(port, () => {
  console.log(`Listening at ${url}`);
})
console.log('node works in root');