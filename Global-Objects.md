# 2. Global objects - part of globol scope

**[Back to Index](README.md)**

**[Previous topic: Introduction](introduction.md)**

When you create a variable in a **JavaScript file**, that variables only exists in the scope that it was declared in. Now what do I mean by this? In the code below, you can see an example of two different variables with different scopes.

```Javascript
// Scope.js

let fileScope = "Can be accessed anywhere in the file";

function doSomething() {  
    let localScope = "Can only be accessed inside this function";
    fileScope = "Can be accessed in the function too!";
}

// This will result in an error because the variable does not exist
// outside the function.
localScope = "Try and change me here";  
```

The variable `fileScope` can be changed or called from anywhere within this file, whereas the `localScope` variable only exists inside the function `doSomething()`.

The reason this is possible is because JavaScript programs share a global namespace between all of the files in the program.

## How to Declare and Use a Global Variable

To set up a global variable, we need to create it on the global object. The global object is what gives us the scope of the **entire** project, rather than just the file (module) the variable was created in. In the code block below, we create a global variable called `globalString` and we give it a value. Next, we change the value of `globalString`, and then finally we set it to undefined.

```JavaScript
// Global.js

global.globalString = "This can be accessed anywhere!";  
console.log(globalString); // Output: "This can be accessed anywhere!"

globalString = "Check me out now";  
console.log(globalString); // Output: "Check me out now"

globalString = undefined;  
console.log(globalString); // Output: undefined  
```

```JavaScript
// Example.js

// We can use the global we created in Global.js in this file 
// as well.
console.log(globalString); // Output: undefined

globalString = "We can change it too!";  
console.log(globalString); // Output: "We can change it too!"  
```

## Variables are not added to global object

```JavaScript
var message = '';
consoloe.log(global.message); //undefined
```

## Why not use `var`

If you declare a variable in a file without using the keyword `var` and then assign a value to it, the global object will set a property for this variable. This process essentially turns it into a globally accessible variable. I strongly advise against using this method though as it is not the proper way to go about creating globals. It is also important to note that if you set the `'use strict'` directive, Node will disable implicit globals and you will likely end up with an error at runtime rather than a working script.

## Practical Use Cases

1. When you create a global variable, it exists throughout the **lifetime** of the application. When a variable persists through the lifetime of the app it means that it is there, in memory, occupying resources while the app is running.
2. Traditionally using global variables can cause **concurrency issues**. If multiple threads can access the same variable and there are no access modifiers or failsafes in place, it can lead to some serious issues of two threads attempting to access and use the same variable. *However*, while this is the case in other languages, it is not necessarily the case for Node.js as it is strictly a single-threaded environment. While it is possible to cluster Node processes, there is no native way to communicate between them.
3. Globals can cause **implicit** coupling between files or variables. Coupling is not a good thing when it comes to writing great code. When writing code, we want to make sure that it is as modular and reusable as possible, while also making sure it is easy to use and understand. Coupling pieces of your code together can lead to some major headaches down the road when you are trying to debug why something isn't working.

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

**[Next topic: Modules](modules.md)**

## References

1. [Using Global Variables in Node.js](https://stackabuse.com/using-global-variables-in-node-js/)
2. [Mosh - Node.js for beginngers](https://www.youtube.com/watch?v=TlB_eWDSMt4)