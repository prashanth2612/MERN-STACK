# 🟢 Node.js REPL

The **REPL** in Node.js stands for:

> **R**ead – **E**valuate – **P**rint – **L**oop

It is an interactive shell that allows you to execute JavaScript code line-by-line.

---

## 💡 What is Node.js?

Node.js is a **JavaScript runtime environment** built on the **V8 engine** (the same engine that powers Google Chrome).

When you type JavaScript code in Node.js:

1. ✅ The **code is passed into the V8 engine**
2. ⚙️ V8 **compiles and executes** it
3. 🔁 The **REPL loops**, waiting for more input

---

## 🚀 How to Start the REPL

Open your terminal and type:

```bash
node

```

![alt text](/Nodejs/Theory/images/image.png)

# 🌐 Node.js Global Object — `global`, `this`, and `globalThis`

This guide explains how **Node.js** handles global objects like `global`, `this`, and the universal `globalThis`. It compares these to the browser environment and shows how they behave differently across contexts.

---

## 🔰 What is `globalThis`?

> `globalThis` is the **universal global object** introduced in ES2020 to work across all environments — Node.js, browsers, workers, etc.

### 📦 Why was `globalThis` introduced?

Previously, each environment had a different global object:

| Environment | Global Object |
|-------------|----------------|
| Browser     | `window`       |
| Web Workers | `self`         |
| Node.js     | `global`       |

This made writing cross-platform code hard.

✅ `globalThis` solves this by being **standard** across all JavaScript environments.

---

## 📍 `globalThis` in Different Environments

| Environment   | `globalThis` points to |
|---------------|------------------------|
| Browser       | `window`               |
| Web Workers   | `self`                 |
| Node.js       | `global`              |

---

## 🧪 Examples

```js
// Node.js or browser — this works everywhere
globalThis.myAppName = "UniversalApp";

console.log(globalThis.myAppName); // UniversalApp

// In Node.js
console.log(globalThis === global); // true
console.log(globalThis === this);   // false (top-level `this` is `{}`)
```


