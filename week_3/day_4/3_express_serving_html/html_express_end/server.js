var express = require('express');
var app = express();

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile('index.html', {'root': 'public'})
});

app.listen(9000, function() {
    console.log("App running on port " + this.address().port);
  });