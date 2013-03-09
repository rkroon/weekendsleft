var express = require('express');
var app = express();

app.get('/', function(request, result){
  var body = 'THERE ARE 43 WEEKENDS LEFT';
  result.setHeader('Content-Type', 'text/plain');
  result.setHeader('Content-Length', body.length);
  result.end(body);
});

app.listen(3000);
console.log('Listening on port 3000');