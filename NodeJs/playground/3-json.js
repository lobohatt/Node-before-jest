const fs = require('fs');

/*
book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);
fs.writeFileSync('2-json.json', bookJSON);
*/

const dataBuffer = fs.readFileSync('2-json.json');
//console.log(dataBuffer);
//console.log(dataBuffer.toString());

const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data);
console.log(data.title);
