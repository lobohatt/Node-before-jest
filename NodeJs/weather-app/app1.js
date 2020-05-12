const postman_request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=11087901159f48d8b9edd62e13c20d5c&query=37.8267,-122.4233&units=f'

postman_request({ url: url, json: true }, (error, response) => {

  console.log(response.body.current); // added json:true property which already parsed the data
  //console.log(response);
  //const data = JSON.parse(response.body);
  //console.log(data);
  // console.log(data.current);
  console.log(response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + '   degrees out.');
});