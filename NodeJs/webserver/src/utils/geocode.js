const postman_request = require('postman-request');

const geocode = (address, callback) => {

  const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibG9ib2hhdCIsImEiOiJjazkzeWUwYmYwNHczM21ueWtncTRndGttIn0.6udfBCdHvd4WEEzYaCRFlw&limit=1';

  postman_request({ url: geocodeURL, json: true }, (error, response) => {

    if (error) {
      callback('Unable to connect to network', undefined);
    }
    else if (response.body.features.length === 0) {
      callback('Unable to get the Location', undefined);
    }
    else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      });
    }

  });

};

module.exports = geocode