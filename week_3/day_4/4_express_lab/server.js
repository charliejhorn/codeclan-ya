const express = require("express");
const app = express();

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('index.html', {'root':'public'})
})


/* app.get("/", function(req, res) {
  res.send('Hello World');
}); */

app.listen(9000, function() {
  console.log("App running on port " + this.address().port);
});