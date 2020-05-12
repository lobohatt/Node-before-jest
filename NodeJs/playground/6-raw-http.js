const https = require('https');
const url = 'https://api.weatherstack.com/current?access_key=11087901159f48d8b9edd62e13c20d5c&query=45,-75&units=m'

const request = https.request(url, (response) => {

  let data = '';

  response.on('data', (chunk) => {   // when new data comes in we get access to them by arg chunk
    data = data + chunk.toString();                                       //console.log(chunk);
    //response.on act as a handler // after this run this callback data goes so we store data
  });                                // in this data from https is coming

  response.on('end', () => {  // when this call back run its wont gett any arg
    const body = JSON.parse(data);
    console.log(body);
  });                         //it is for the end

});

request.on('error', (error) => {     // it has error property
  console.log('An error', error);
});

request.end();