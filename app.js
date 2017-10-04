// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
	}
	else if (request.url === '/ninjas') {
		fs.readFile('ninjas.html', 'utf8', function (errors, contents) {
			response.writeHead(200, { 'Content-Type': 'text/html' });  // send data about response
			response.write(contents);  //  send response body
			response.end(); // finished!
		});
	}
	else if (request.url === '/dojos/ninjas') {
		fs.readFile('dojos.html', 'utf8', function (errors, contents) {
			response.writeHead(200, { 'Content-Type': 'text/html' });  // send data about response
			response.write(contents);  //  send response body
			response.end(); // finished!
		});
	}
    // request didn't match anything:
    else {
		fs.readFile('error404.html', 'utf8', function (errors, contents) {
			response.writeHead(404, { 'Content-Type': 'text/html' });
			response.write(contents);  //  send response bod
			response.end();
		})
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");