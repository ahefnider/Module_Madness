var http = require('http');
var accountBalance = require('./modules/module3');


http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(accountBalance());
  res.end();
}).listen(4000);
