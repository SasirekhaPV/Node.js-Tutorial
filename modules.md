# 3. Modules

**[Back to Index](README.md)**

**[Previous topic: Global Objects](Global-Objects.md)**

## Some issues with `var` and global scope

In **Javascript**(not Node.js), when we declare a variable or a function, it is added to the global scope:

```Javascript
var sayHello = function(){

}

window.sayHello(); // function available as window object
```

Issue is that when we create an application, we often split our Javascript code into multiple files. It is hence possible that we have two files and both these files contain functions with the **exact** name. So when we define `sayHello` function in a new file, that new definition is going to overwrite the previous definition.

## Modularity in node

This is why we need **modularity**. Functions and variables defined in one module don't override others. They are encapsulated in that module. 

If we want to use those functions and variables **private** to one module in another module. We need to explicity `export` them into another module. This will make the functions and variables **public**. We will look at this later.

Every node application has at least one module which we call the main module. E.g. `app.js` below is our main module:

```JavaScript
console.log(module); // module object is not a global object
```

Running the above file is likely to produce an output as follows:

```bash
Info: Start process (10:58:31 AM)
Module {
  id: '.',
  exports: {},
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

The above output shows a `.json` object with **key: value** pairs or properties:

1. `id` - every module has a unique identifier
2. `exports`
3. `parent`
4. `filename` - complete path to that file
5. `loaded` - determines whether this module is loaded or not
6. `children`
7. `paths`

So now we know, in node, **every file is a module**. Variables and functions defined in that file are scoped in that module. They are not available outside that module.

## What is a module in Node.js

Consider modules to be the same as JavaScript libraries.

A set of functions you want to include in your application.

**[Next topic: Creating a module](creating-modules.md)**

## References

1. [Mosh - Node.js for beginners](https://www.youtube.com/watch?v=TlB_eWDSMt4)