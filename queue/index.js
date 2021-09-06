// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;


// My first implementation, extending Array
class queueUsingArray extends Array {
    
    constructor() {
        super()
        this.queueArray = new Array()
    }

    add(element) {
        this.queueArray.push(element)    
    }

    remove() {

        if (this.queueArray.length == 0) {
            console.log("No elements!")
        }
        else {
            return this.queueArray.shift(this.queueArray[0])
        }
    }
}

// My second implementation, without extending Array

// NOTE: It makes a lot more sense to do this in C/C++, but it's the same sort of thinking, except
//       without the explicit memory management.
class Queue {

    constructor() {
        this.queueArray = []
    }

    add(element) {

        if (this.queueArray.length == 0) {
            this.queueArray[0] = element
        }
        else {
            this.queueArray[this.queueArray.length] = element
        }
    }

    remove() {

        if (this.queueArray.length == 0) {
            console.log("No elements!")
        }
        else {

            let elementRemoved = this.queueArray[0]

            for (let i = 0; i < this.queueArray.length; i++)
            {
                this.queueArray[i] = this.queueArray[i + 1]
            }

            return elementRemoved
        }
    }
}

// Instructor implementation
// Interesting: it's just the inverse of my original implementation (but same outcome)
class queueAlt {

    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
    }

    record() {
        return this.data.pop();
    }
}

// Testing it
const newQueue = new Queue();

newQueue.add(1);
console.log(newQueue)
newQueue.add(2);
console.log(newQueue)
newQueue.add(3);
console.log(newQueue)

newQueue.remove()
console.log(newQueue)
newQueue.remove()
console.log(newQueue)

module.exports = Queue;
