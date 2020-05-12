const geocode = require('./utils/gpractice.js');
const forecast = require('./utils/fpractice.js');

const address = process.argv[2];

if (!address) {
  console.log('Please enter the address');
}
else {
  geocode(address, (error, { latitude, longitude, location }) => {

    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastdata) => {
      if (error) {
        return console.log(error);
      }


      console.log(forecastdata);
      console.log(location);
    });
  });
}



