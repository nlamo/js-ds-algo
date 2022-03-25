// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// My correct implementation after diagrammatic explanation
class Queue {

    constructor() {
        this.stackA = new Stack()
        this.stackB = new Stack()
    }

    // If stackB has a set that is correctly ordered (queue-ified), push them back into
    // stackA before pushing into stackA

    // stackA is *always* first-in-last-out
    add(element) { 

        while (this.stackB.peek() != undefined) {
            this.stackA.push(this.stackB.pop())
        }

        this.stackA.push(element)
    }

    // If we want to remove, we have to pop each item from stackA over into stackB,
    // which essentially queue-ifies stackB. As such, once we have done this, popping
    // from stackB gives us the first element inserted. 
    remove() {
        while (this.stackA.peek() != undefined) {
            this.stackB.push(this.stackA.pop())
        }

        return this.stackB.pop()
    }

    // Same idea. If stackB already has values, then it's queue-ified, and so calling peek() from
    // it will give us the first in the queue. However, if stackA has values, then we need to pop
    // them over to stackB such we can properly 'peek' at the first value.
    peek() {
        if (this.stackB.peek() != undefined) {
            return this.stackB.peek()
        }
        else {

            while (this.stackA.peek() != undefined) {
                this.stackB.push(this.stackA.pop())
            }

            return this.stackB.peek()
        }
    }
}

// My first failed implementation (incomplete)
// I was trying to think of how two stacks would *map* to make a queue, using only methods provided
class failedQueue {
     
    constructor() {
        this.valueStack = new Stack()
        this.orderStack = new Stack()
    }

    // Add element to valueStack, add order of element to orderStack
    add(element) {

        this.valueStack.push(element)

        if (this.orderStack.peek() == undefined) {
            this.orderStack.push(1)
        } 
        else {
            let orderStackCurrent = this.orderStack.peek();
            this.orderStack.push(orderStackCurrent + 1)
        }
    }

    // If we want to remove, we have to pop each item from stackA over into stackB,
    // which essentially queue-ifies stackB. As such, once we have done this, popping
    // from stackB gives us the first element inserted. 
    remove() {
        while (this.stackA.peek() != undefined) {
            this.stackB.push(this.stackA.pop())
        }

        return this.stackB.pop()
    }

    // Same idea. If stackB already has values, then it's queue-ified, and so calling peek() from
    // it will give us the first in the queue. However, if stackA has values, then we need to pop
    // them over to stackB such we can properly 'peek' at the first value.
    peek() {
        if (this.stackB.peek() != undefined) {
            return this.stackB.peek()
        }
        else {

            while (this.stackA.peek() != undefined) {
                this.stackB.push(this.stackA.pop())
            }

            return this.stackB.peek()
        }
    }
}

// Testing it
const queueFromStack = new Queue()
queueFromStack.add(1)
queueFromStack.add(2)
queueFromStack.add(3)

console.log(queueFromStack)

queueFromStack.remove();

console.log(queueFromStack.peek());

console.log(queueFromStack)

module.exports = Queue;
