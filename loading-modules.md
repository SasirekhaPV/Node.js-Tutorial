# 5 Loading a module

To load a module, we use the `require` function in our `app.js` file:

```JavaScript
var logger = require('./logger'); // assuming the logger.js file we created is in the same foler
// .js extension is added by node

console.log(logger);
```

Running this gives us the following output:

```bash
Info: Start process (11:35:01 AM)
{ log: [Function: log] }
Info: End process (11:35:01 AM)
```

This object has a single object called `log` which contains the log function. We can call this function log in app.js:

```JavaScript
var logger = require('./logger'); // assuming the logger.js file we created is in the same foler
// .js extension is added by node

logger.log('message'); // will return message
```

Note that here we used `var` to create a variable logger. By convention we should make this a constant using `const`, so we don't accidentally change the reference logger:

```JavaScript
const logger = require('./logger'); // assuming the logger.js file we created is in the same foler
// .js extension is added by node

logger.log('message'); // will return message
```

## References

1. [Mosh - Node.js for beginngers](https://www.youtube.com/watch?v=TlB_eWDSMt4)