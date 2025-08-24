# 📌 Anonymous Functions vs First Class Functions | Function Statement vs Function Expression vs Function Declaration

```javascript
// 📌 Function Statement (Function Declaration)
// ✅ Hoisting works — can be called before definition
a(); // Output: a called
function a() {
    console.log("a called");
}

// 📌 Function Expression
// ❌ Hoisting does not work for the function body
try {
    b(); // TypeError: b is not a function
} catch (err) {
    console.log(err.message);
}
var b = function () {
    console.log("b called");
};
b(); // Output: b called

// 📌 Anonymous Function (only valid inside expressions, not as a standalone statement)
// ❌ Standalone: SyntaxError
var anon = function () {
    console.log("anonymous function");
};
anon(); // Output: anonymous function

// 📌 Named Function Expression
var c = function namedFunc() {
    console.log("named function expression");
};
c(); // Output: named function expression
try {
    namedFunc(); // ReferenceError
} catch (err) {
    console.log(err.message);
}

// 📌 Parameters vs Arguments
function sum(x, y) { // x, y = parameters
    console.log("Sum is:", x + y);
}
sum(2, 3); // 2, 3 = arguments

// 📌 First Class Functions
function greet() {
    return "Hello!";
}
function executor(fn) {
    console.log(fn());
}
executor(greet); // Output: Hello!

// 📌 Arrow Functions
const add = (a, b) => a + b;
console.log("Arrow sum:", add(5, 7)); // Output: 12
