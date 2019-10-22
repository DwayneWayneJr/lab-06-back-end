'use strict';

const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());


const PORT = process.env.PORT || 3003;

app.get('/location', (request, response) => {
  response.send('proof of life');
  const city = request.query.data;

  const locationData = searchLatToLong(city);

  response.send(cityData);
});

function locationData(location) {
  const geoData = require('./data/geo.json');
}

app.get('*', (request, response) => {
  response.status(404);
  response.send('problem');
});

app.listen(PORT, () => console.log('app is listening on ${PORT}'));