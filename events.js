const events = require('events');
let alarm = new events.EventEmitter(); // this is an eventHandler

//Create an event handler:
let ring = function () {
    console.log('Rrrrriiing!!!');
}

//Assign the event handler to an event:
alarm.on('ButtonPush', ring);

//Fire the 'ButtonPush' event:
alarm.emit('ButtonPush');