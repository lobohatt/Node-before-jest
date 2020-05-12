const fs = require('fs');

const readData = fs.readFileSync('challenge1.json');

const data = readData.toString();
const parseData = JSON.parse(data);

parseData.name = 'LOBO';
parseData.planet = 'Earth'
parseData.age = 22;

const user = JSON.stringify(parseData);
fs.writeFileSync('challenge1.json', user);

//{ "name": "Andrew", "planet": "Earth", "age": 27 } challenge in Json file