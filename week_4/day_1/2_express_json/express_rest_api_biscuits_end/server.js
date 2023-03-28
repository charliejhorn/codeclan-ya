const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const createRouter = require('./helpers/create_router.js'); 

app.use(express.json());

const biscuits = [
  { name: "Digestives", brand: "McVitie's" },
  { name: "Shortbreads", brand: "Walkers" },
  { name: "Jammy Dodgers", brand: "Burton's" },
  { name: "Custard Creams", brand: "Crawford's" }
];

const biscuitsRouter = createRouter(biscuits);
app.use('/api/biscuits', biscuitsRouter);


app.get('/' ,(req, res) => {
  res.sendFile('index.html', {'root': 'public'})
});

app.listen(9000, function () {
  console.log(`App running on port ${ this.address().port }`);
});