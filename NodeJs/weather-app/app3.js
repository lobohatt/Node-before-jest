const postman_request = require('postman-request');


const url = 'http://api.weatherstack.com/current?access_key=11087901159f48d8b9edd62e13c20d5c&query=37.8267,-122.4233&units=f'    //37.8267,-122.4233 by removing this we get unable to find location , as removing co-ordinates creates error JSON property in body

postman_request({ url: url, json: true }, (error, response) => {

  if (error) {
    console.log('Unable to connect to weather service');
  }
  else if (response.body.error) {
    console.log('Unable to find location');
  }
  else {
    console.log(response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + '   degrees out.');
  }

});

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibG9ib2hhdCIsImEiOiJjazkzeWUwYmYwNHczM21ueWtncTRndGttIn0.6udfBCdHvd4WEEzYaCRFlw&limit=1';

postman_request({ url: geocodeURL, json: true }, (error, response) => {


  if (error) {
    console.log('Unable to connect to location services');
  } else if (response.body.features.length === 0) {
    console.log('error in response try another location');
  }
  else {
    console.log('Latitude and Longitude is ' + response.body.features[0].center[0] + '  &  ' + response.body.features[0].center[1]);
  }
  //console.log(response);
  //const data = JSON.parse(response.body);
  ////console.log(data.features[0].center[0]);
});