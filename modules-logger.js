var url = 'http://mylogger.io/log'; // some fictious logger service

// we're going to send a HTTP request to this log
function log(message){
    // Send a HTTP request
    console.log(message);
}

module.exports.log = log;