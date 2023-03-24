const express = require('express')
const app = express();

/* 
    GET:read     POST:create    PUT:update     DELETE:delete
*/

app.get("/", function (req, res) {
    res.send('hello world! booooooo')
})

app.listen(9000, function() {
    console.log('app running on port ' + this.address().port)
})