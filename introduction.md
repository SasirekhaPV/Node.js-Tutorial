# 1. Introduction

**[Back to Index](README.md)**

## The official definition

> Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

* Node.js® is a JavaScript runtime built on **Chrome's V8** JavaScript engine.
  Ryan Dahl (*clears throat* Mr Ryan Dahl), founder of Node.js, observed that chrome's V8 JavaScript engine is that fastest. So he embedded it in a C++ program with some additional implementation and called it `Node.exe`...

  *Eureka!* ... and thus node.js was born.
* Node.js is **not** a programming language.
* Node.js is **not** a framework.
  If anyone tells you otherwise, shoot...where are my manners, sorry...
  
  ...*Fails to immitate a posh accent*, it's not a programming language nor a framework, it's a **RUNTIME ENVIRONMENT** for executing JavaScript code.

  JavaScript needs a JavaScript engine inside a browser to run. Ryan Dahl thought it would be a great idea to write code in JavaScript and be able to run this outside of the browser. Hence, the V8 engine as mentioned earlier.

## Uses asynchronous programming

A common task for a web server can be to open a file on the server and return the content to the client.

*Here is how PHP or ASP handles a file request:*

* Sends the task to the computer's file system.
* Waits while the file system opens and reads the file.
* Returns the content to the client.
* Ready to handle the next request.

Notice how everything is handled is a sequential manner?

Think of file handling in a PHP as waiting in a badly organizer restraurant. Imagine two tables in a restaurant. Something as follows:


<p align='center'><img src="https://raw.githubusercontent.com/jacobjohn2016/Node.js-Tutorial/master/images/table.png" alt="table restaurant" width="430" height="300"></p>


*Taken from [this](https://www.youtube.com/watch?v=TlB_eWDSMt4&t=3577s) video.*

If the waiter only waits only on one table at a time. The following would happen:

* Customer sits in table 1.
* Waiter notices and takes table 1's order.
* Waiter gives order to chef.
* New customer sits in table 2.
* Waiter notices, doesn't attend table 2 because table 1 is still not served.
* Chef indicates food is ready.
* Waiter serves the food to table 1.
* Waiter then takes table 2's order.

Imagine how **FRUSTRATING** this would be!1!!

Node.js doesn't do that, instead it would this...

* Customer sits in table 1.
* Waiter notices and takes table 1's order.
* Waiter gives order to chef.
* New customer sits in table 2.
* Waiter takes table 2's order.
* and henceforth...

Similarly,

*Here is how Node.js handles a file request:*

* Sends the task to the computer's file system
* Ready to handle the next request
* When the file system has opened and read the file, the server returns the content to the client.

## Why Node.js

* Node.js **eliminates** **the** **waiting**, and simply continues with the next request.
* Node.js runs **single-threaded**, **non-blocking**, **asynchronously**, which is **very memory efficient**.

## What can Node.js do

* generate dynamic page content
* create, open, read, write, delete, and close files on the server
* collect form data
* add, delete, modify data in your database

## Features (consolidated)

* **Asynchronous and Event Driven** − All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call.
* **Very Fast** − Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution.
* **Single Threaded but Highly Scalable** − Node.js uses a single threaded model with event looping. Event mechanism helps the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests. Node.js uses a single threaded program and the same program can provide service to a much larger number of requests than traditional servers like Apache HTTP Server.
* **No Buffering** − Node.js applications never buffer any data. These applications simply output the data in chunks.
* **License** − Node.js is released under the MIT license.

## Where Not to Use Node.js

It is **not advisable** to use Node.js for **CPU intensive** applications. This is primarily because Node.js is single threaded.

## Download Node.js

Download Node.js from the official Node.js web site: [https://nodejs.org](https://nodejs.org).

## Gettting Started

Once you have downloaded and installed Node.js on your computer, let's try to display "Hello World" in a web browser.

Create a Node.js file named "myfirst.js", and add the following code:

``` javascript
//myfirst.js
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
```

The file you have just created must be initiated by Node.js before any action can take place.

Start your command line interface, write `node myfirst.js` and hit enter:

``` bash
C:\Users\Your Name> node myfirst.js
```

**[Next topic: Global objects](Global-Objects.md)**

## References

1. [Nodejs.org](https://nodejs.org/en/about/)
2. [tutorialspoint: Node.js-Introduction](https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm)
3. [w3schools: Node.js-Introduction](https://www.w3schools.com/nodejs/default.asp)