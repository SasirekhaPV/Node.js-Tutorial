# 6. HTTP module

**[Back to Index](README.md)**

**[Previous topic: Loading a module](loading-modules.md)**

The HTTP module is used for creating networking applications. For example, we can create a web server that listens for HTTP request on a given port.

This module allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

## Node.js as a Web Server

The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client. Use the `createServer()` method to create an HTTP server. The `server object` is also an Event Emitter. 

Let's make a `server.js` file to do this:

```JavaScript
//server.js

const http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
```

The function passed into the `http.createServer()` method, will be executed when someone tries to access the computer on port 8080 or [http://localhost:8080/](http://localhost:8080/).

Save the code above in a file called "server.js", and initiate the file:

```bash
C:\Users\Your Name>node server.js
```

**[Next topic: Events](events.md)**

## References

1. [Mosh - Node.js for beginners](https://www.youtube.com/watch?v=TlB_eWDSMt4)
2. [w3schools - Node.js Modules](https://www.w3schools.com/nodejs/nodejs_modules.asp)