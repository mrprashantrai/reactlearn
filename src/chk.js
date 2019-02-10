var express = require('express')
var app = express()
 

 
app.post('', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'});
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})