# Global objects - part of globol scope

## All these functions belong to global object

* A window object in browsers represents the global scope
* All functions are variables defined globally can be accessed via `global` object. e.g. `global.console.log();`

The following objects are **prefixed** with `global` as that is where all the following objects are defined:

* `console.log();` - Writes message to console.
* `consoloe.log(window);` - this won't run as we're **not** running in the browser's runtime environment.
* `setTimeout();` - Used to call a function after a delay
* `clearTimeout();` - Used to clear function delay set using `setTimeout();`
* `setInterval();` - Used to repeatively call a function after a given delay
* `clearInterval();` - Stops function from being called repeatively using `setInterval();`

## Variables are not added to global object