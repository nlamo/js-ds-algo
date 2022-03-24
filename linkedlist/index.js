// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// Default for Node is null just in case it is tail
class Node {
   constructor(data, Node = null) {
      this.data = data;
      this.next = Node;
   }
}

class LinkedList {
   constructor() {
      this.head = null;
   }

   insertFirst(data) {
      const n = new Node(data, this.head);
      this.head = n;
   }
}

class LinkedListOld {
   constructor() {
      this.head = null;
   }

   // original implementation (flawed)
   insertFirst(data) {
      if (this.head == null) {
         const n = new Node(data);
         this.head = n;
      }
      else {
         const n = new Node(data, this.head);
         this.head = n;
      }
   }
}

// ----------------------------------------------------------

// Basic test of the Node itself, its linkability
const n = new Node('There');
console.log(n.data);
console.log(n.next);

const n2 = new Node('Hi', n);
console.log(n2.next);

// Creation of the linked list
const list = new LinkedList();
console.log(list.head);

module.exports = { Node, LinkedList };
