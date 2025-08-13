# ⚙️ Working of Execution Context

![Execution Context Overview](./images/image-2.png)

---

## 📌 1. Creation Phase

During the creation phase, the JavaScript engine sets up the execution context:

![Creation Phase](./images/image-3.png)

- A **global object** is created (`window` in browsers, `global` in Node.js).
- A special variable `this` is initialized.
- Memory is allocated for:
  - All **variables** (initialized as `undefined`)
  - All **function declarations** (entire function is stored)

---

## 🧠 2. Memory Allocation

In this phase:

![Memory Allocation](./images/image-4.png)

- Every variable is stored in memory and initialized with `undefined`.
- Functions are stored **along with their full definition/code** (not just `undefined`).


## 🚀 3. Code Execution phase

![alt text](./images/image-5.png)

## Call Stack in js

![alt text](./images/stack.png)

