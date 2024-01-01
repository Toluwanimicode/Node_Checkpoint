const http = require('http');
 console.log(http);


 http.createServer(function (request, response) {
  response.end('Hello Node\n');
  }).listen(8083, () => console.log('Server is runnning on port 8083')); 