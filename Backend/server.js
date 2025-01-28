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
  try {
    const {input} = req.body;

    if (!input) {
      return res.status(400).json({error: 'Please provide an input'});
    }

    main(input).then((response) => {
      res.send(response);
    });
    
  } catch (error) {
    res.status(500).json({error: 'Something went wrong'});
    throw new Error(error);
  }
});

app.listen((PORT), () => {
    console.log('Server is running on port ' + PORT);
});
    