const main = require('./deepseek.js');
const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/api/deepseek', (req, res) => {
  const {input} = req.body;
  console.log(input);
  main(input).then((response) => {
    res.send(response);
  });
});

app.listen((PORT), () => {
    console.log('Server is running on port ' + PORT);
});
    