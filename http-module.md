# 6. HTTP module

**[Back to Index](README.md)**

**[Previous topic: Loading a module](loading-modules.md)**

The HTTP module is used for creating networking applications. For example, we can create a web server that listens for HTTP request on a given port.

This module allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

## Node.js as a Web Server

The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client. 

Use the `createServer()` method to create an HTTP server. This server will listen listen to client's requests and is similar to Apache HTTP Server.

The `server object` is an object of the EventEmitter class. We will look at this later,

Let's make a `server.js` file to do this:

We use the created `http` instance and call `http.createServer()` method to create a server instance. Then we bind it at port 8080 using the `listen` method associated with the server instance. Pass it a function with parameters request and response.

``` javascript
//server.js

const http = require('http');

//create a server object:
http.createServer(function (request, response) {
  // Send the HTTP header
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World!'); //write a response to the client
  response.end(); //end the response
}).listen(8080); //the server object listens on port 8080
```

The function passed into the `http.createServer()` method, will be executed when someone tries to access the computer on port 8080 or [http://localhost:8080/](http://localhost:8080/).

Save the code above in a file called "server.js", and initiate the file:

``` bash
C:\Users\Your Name>node server.js
```

**[Next topic: Events](events.md)**

## References

1. [Mosh - Node.js for beginners](https://www.youtube.com/watch?v=TlB_eWDSMt4)
2. [w3schools - Node.js Modules](https://www.w3schools.com/nodejs/nodejs_modules.asp)
3. [Tutorialspoint - First Application](https://www.tutorialspoint.com/nodejs/nodejs_first_application.htm)