const postman_request = require('postman-request');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');


geocode('India', (error, data) => {
  console.log('Error ', error);
  console.log('Data ', data);
});


forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});