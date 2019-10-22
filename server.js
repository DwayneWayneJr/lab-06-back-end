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

  response.send(locationData);
});

app.get('*', (request, response) => {
  response.status(404);
  response.send('problem');
});

function searchLatToLong(location) {
  const geoData = require('./data/geo.json');
}


app.listen(PORT, () => console.log('app is listening on ${PORT}'));


function City(city, geoData) {
  this.search_query = city;
  this.formatted_query = geoData.results[0].formatted_address;
  this.latitude = geoData.results[0].geometry.location.lat;
  this.longitude = geoData.results[0].geometry.location.lng;
}

