var connect = require('connect'),
  open = require('open'),
  port = process.argv[3] || 8080,
  serverType = process.argv[2] || 'app';

connect().use(connect.static(__dirname+'/'+serverType)).listen(port);
console.log("Static file server running at\n  => http://localhost:" + port + "/\n Pointing to /"+ serverType +" folder.\n CTRL + C to shutdown");
open('http://localhost:' + port);