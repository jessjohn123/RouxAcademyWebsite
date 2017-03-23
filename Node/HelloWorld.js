var http = require('http'); //add the http module
var myServer = http.createServer(function(request,response){
    //Specifying mime type
    response.writeHead(200, {"Content-type" : "text/html"});
    response.write("<b>Hello</b> World");
    response.end();
}); //Create myServer

//Request coming in for port
myServer.listen(3000);
console.log("Go to http://localhost:3000 on your browser ");
