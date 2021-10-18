// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

// My implementation (instructor implementation was exactly the same)
class Stack {

    constructor() {
        this.stackArray = []
    }

    push(element) {
        this.stackArray.push(element);
    }

    pop() {
        return this.stackArray.pop();
    }

    peek() {
        return this.stackArray[this.stackArray.length - 1];
    }
}

// Testing it
const newStack = new Stack();

newStack.push(2);
newStack.push(5);
newStack.push(7);
newStack.push(9);

console.log(newStack);

newStack.pop();
newStack.pop();

console.log(newStack);

console.log("First element inserted " + newStack.peek());

module.exports = Stack;
