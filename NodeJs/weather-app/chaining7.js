const postman_request = require('postman-request');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const address = process.argv[2];  //to grt address input from user

if (!address) {                     // if no address provided
  console.log('please provide address');
} else {
  geocode(address, (error, data) => {

    if (error) {
      return console.log(error);
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(data.location);
      console.log(forecastData);

    });
  });
}

