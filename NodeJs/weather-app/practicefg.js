const geocode = require('./utils/gpractice.js');
const forecast = require('./utils/fpractice.js');

const address = process.argv[2];

if (!address) {
  console.log('Please enter the address');
}
else {
  geocode(address, (error, data) => {

    if (error) {
      return console.log(error);
    }
    forecast(data.latitude, data.longitude, (error, forecastdata) => {
      if (error) {
        return console.log(error);
      }


      console.log(forecastdata);
      console.log(data.location);
    });
  });
}



