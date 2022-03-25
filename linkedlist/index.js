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

// Linked list with various methods
class LinkedList {
   constructor() {
      this.head = null;
   }

   insertFirst(data) {
      const node = new Node(data, this.head);
      this.head = node;
   }

   size() {
      let node = this.head;
      let count = 0;

      while (node) {
         count++;
         node = node.next;
      }

      return count;
   }

   getFirst() {
      return this.head;
   }

   getLast() {
      if (!this.head) {
         return null;
      }

      let node = this.head;

      while (node) {
         if (node.next == null) {
            return node;
         }

         node = node.next;
      }
   }

   clear() {
      this.head = null;
   }

   removeFirst() {
      if (!this.head) {
         return;
      }

      let headNode = this.head;
      let secondNode = headNode.next;

      this.head = secondNode;

      // cleaner solution: this.head = this.head.next (one line of code vs three)
   }

   // 1) if empty, return
   // 2) if this.head.next doesn't exist, then there's only one node, which we set to null
   // 3) if we have more than two nodes, get the last node, and iterate until node.next is equal to the last node,
   //    then simply set node.next to null (which rids of the last node)
   removeLast() {
      if (!this.head) {
         return;
      }

      if (!this.head.next) {
         this.head = null;
         return;
      }

      let lastNode = this.getLast();
      let node = this.head;
      
      while (node) {
         if (node.next === lastNode) {
            node.next = null;
            break;
         }

         node = node.next;
      }
   }
   
   // my solution for removeLast() is quite distinct from Grider's solution below:
   // he iterates through the list while there exists a node.next, using 'node' and 'previous' pointers for nodes;
   // once arriving at the end, he then sets previous.next to null -- perfectly good solution
   removeLastAlt() {
      if (!this.head) {
         return;
      }

      if (!this.head.next) {
         this.head = null;
         return;
      }

      let previous = this.head;
      let node = this.head.next;

      while (node.next) {
         previous = node;
         node = node.next;
      }

      previous.next = null;
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
