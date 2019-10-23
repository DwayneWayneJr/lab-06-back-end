'use strict';

const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());


const PORT = process.env.PORT || 3003;


app.get('/location', (request, response) => {
  const city = request.query.data;

  const locationData = searchLatToLong(city);
  console.log(locationData);

  response.send(locationData);
});

app.get('*', (request, response) => {
  response.status(404);
  response.send('problem');
});

function searchLatToLong(location) {
  const geoData = require('./data/geo.json');

  let myCity = new City(location, geoData);
  return myCity;
}

function City(city, geoData) {
  this.search_query = city;
  this.formatted_query = geoData.results[0].formatted_address;
  this.latitude = geoData.results[0].geometry.location.lat;
  this.longitude = geoData.results[0].geometry.location.lng;
}

app.get('/weather', (request, response) => {
  const darkskyData = require('./data.darksky.json')
  const weatherArray = [];
});



app.listen(PORT, () => console.log('app is listening on ${PORT}'));



