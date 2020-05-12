const path = require('path');
const express = require('express');

const app = express();

const direc = path.join(__dirname, '../public');


app.set('view engine', 'hbs');


app.use(express.static(direc));

app.get('', (req, res) => {
  res.render('index', {
    name: 'john',
    location: 'Aus'
  });
});


app.listen(3000, () => {
  console.log('Server up');
});