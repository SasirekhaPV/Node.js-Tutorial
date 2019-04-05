# 7. Events

**[Back to Index](README.md)**

**[Previous topic: HTTP module](http-module.md)**

Node.js is perfect for event-driven applications.

## What are events

Event is a signal that indicates that something has happened in our application.

For example, the HTTP class can be used to build a web server. Every time we receive a request on that port, that HTTP class raises an event or a new request. We need to read that request and return the right response.

## Events module

Node.js has a built-in module, called "Events", where you can `create-`, `fire-`, and `listen for-` your own events.

To include the built-in Events module use the `require() `method. In addition, all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an `EventEmitter` object:

```JavaScript
const events = require('events');
const eventEmitter = new events.EventEmitter();
```

## Eventemitter object

You can assign event handlers to your own events with the EventEmitter object.

*But what does each event handler means?*

* `emit()` - Used for signalling or firing an event. We can pass an argument or the name of the event. This raises the event.
* `addListener()` - Register a listener that listens for the event when it's raised.
* `on()` - We usually use this method instead of `addListener()`.
  
  ```JavaScript
  // Example
  emitter.on('messageLogged',function()){
  // runs some function when event messageLogged is raised
  console.log('Listener Called');
  };
  ```
  
  Note that we should always add an emitter only after calling a listener. This is because the emitter iterates over all the listeners and calls them asynchronously. 

In the example below we have created a function that will be executed when a "scream" event is fired.

To fire an event, use the `emit()` method.

```Javascript
const events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');
```

## CONGRATULATIONS

You've succesfully completed this basic tutorial.
[Click here](README.md) to go back to the index

## References

1. [Mosh - Node.js for beginners](https://www.youtube.com/watch?v=TlB_eWDSMt4)
2. [w3schools - Node.js Events](https://www.w3schools.com/nodejs/nodejs_events.asp)