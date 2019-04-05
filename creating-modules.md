# 4 Creating a module

**[Back to Index](README.md)**

**[Previous topic: Modules](modules.md)**

Let us assume that we're creating a module for login messages. Now let's imagine we're going to use a remote logger services. These services give us a **URL** and we can send a **HTTP Request** to that URL to log messages in the cloud.

```JavaScript
//logger.js
var url = 'http://mylogger.io/log'; // some fictious logger service

// we're going to send a HTTP request to this log
function log(message){
    // Send a HTTP request
    console.log(message);
}
```

The `log` function is scoped the the `logger.js` file. But we want to be able to call this function from our `app.js` module.

Recall the module object and properties from the previous section?

```bash
Info: Start process (10:58:31 AM)
Module {
  id: '.',
  exports: {}, # We're going to use this export object
  parent: null,
  filename: '/Users/jacobjohn/Codes/Node-js-tutorial/node_0fb43809c8baa.tmp',
  loaded: false,
  children: [],
  paths: 
   [ '/Users/jacobjohn/Codes/Node-js-tutorial/node_modules',
     '/Users/jacobjohn/Codes/node_modules',
     '/Users/jacobjohn/node_modules',
     '/Users/node_modules',
     '/node_modules' ] }
Info: End process (10:58:32 AM)
```

Anything that we add to this modules object will be exported from this module and will be available outside of this module.

Now in our `logger.js` file, we're going to make the following changes:

```JavaScript
//logger.js
var url = 'http://mylogger.io/log'; // some fictious logger service

// we're going to send a HTTP request to this log
function log(message){
    // Send a HTTP request
    console.log(message);
}

module.exports.logFun = log; // adding the function log to the module object in app.js with a name logFun
// module.exports.endPoint = url; // doing the same for url
```

**[Next topic: Loading a module](loading-modules.md)**

## References

1. [Mosh - Node.js for beginners](https://www.youtube.com/watch?v=TlB_eWDSMt4)