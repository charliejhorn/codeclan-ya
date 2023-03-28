const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())

const biscuits = [
  { name: "Digestives", brand: "McVitie's" },
  { name: "Shortbreads", brand: "Walkers" },
  { name: "Jammy Dodgers", brand: "Burton's" },
  { name: "Custard Creams", brand: "Crawford's" }
];

// send biscuits back
app.get('/api/biscuits', (req, res) => {
  res.json(biscuits)
})

// send specific biscuit back
app.get('/api/biscuits/:id', (req, res) => {
  res.json(biscuits[req.params.id])
})

// listen for new biscuits
app.post('/api/biscuits', (req, res) => {
  biscuits.push(req.body)
  res.json(biscuits)
})

app.get('/' ,(req, res) => {
  res.sendFile('index.html', {'root': 'public'})
});

app.listen(9000, function () {
  console.log(`App running on port ${ this.address().port }`);
});