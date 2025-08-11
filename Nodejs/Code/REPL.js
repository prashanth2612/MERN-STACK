// const sum = require('./export&require')
// // Declaring variables
// // var name1 = "NODEJS";
// // var a = 10;
// // var b = 20;
 
// // // Output the variables
// // console.log(name1);      // NODEJS
// // console.log(a + b);      // 30

// // 🌍 Global object
// // 'global' is not a part of the V8 engine.
// // It is given to us by Node.js and is one of Node's "superpowers".
// // console.log(global);     // Prints large global object

// // 📌 Some features of the global object:
// // - setTimeout
// // - setInterval
// // - clearTimeout
// // - process
// // - Buffer
// // - console
// // - __dirname, __filename, require()

// // ⚠️ Note:
// // fetch is NOT built into Node.js by default. You must import it manually.

// // ❓ Is 'global' similar to 'window', 'self', and 'frames' in the browser console?
// // ✅ Yes, in the sense that it's the root-level object.
// // But, it's specific to Node.js.

// // 🔍 'this' at the top-level in a Node.js file
// // Unlike the browser, where 'this' refers to the 'window' object,
// // in Node.js, 'this' refers to an empty object: {}
// // console.log(this);       // {}
// console.log(sum);

// sum(2,3)