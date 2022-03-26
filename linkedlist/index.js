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
      let node = new Node(data, this.head);
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

      // cleaner solution from Grider: this.head = this.head.next (one line of code vs three)
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

   insertLast(data) {
      let node = new Node(data);
      let lastNode = this.getLast();

      // if the list is empty, then we can just insert first node (which will also be the last)
      if (!this.head) {
         this.insertFirst(data);
         return;
      }

      lastNode.next = node;
   }

   // Grider's implementation
   insertLastAlt(data) {
      let last = this.getLast();

      if (last) {
         // There are some existing nodes in our chain
         last.next = new Node(data);
      }
      else {
         // The chain is empty!
         this.head = new Node(data);
      }
   }

   getAt(index) {
      let count = 0;
      let node = this.head;

      while (node) {
         if (count == index) {
            return node;
         }

         node = node.next;
         count++;
      }

      return null;
   }
   
   // 1) if there's no head, the list is empty, simply return
   // 2) if there's a head but no second node, and if index is 0, then we set the head to null and return;
   //    otherwise we simply return
   // 3) if there's a head and a second node, and if index is 0, then we set head to head.next, but we 
   //    do not return, as based on the first conditional, execution may need to proceed
   // 4) the main algorithm: we have the main node (this.head), we have the node to be removed (this.getAt(index));
   //    we iterate over each node, and if node.next is equal to nodeToRemove, then we set node.next to be 
   //    nodeToRemove.next
   //       * the 'next' reference of the node *before* nodeToRemove is changed to the node *after* nodeToRemove
   removeAt(index) {
      if (!this.head) {
         return;
      }

      if (this.head && !this.head.next) {
         if (index == 0) {
            this.head = null;
            return;
         }
         else {
            return;
         }
      }

      if (this.head && this.head.next) {
         if (index == 0) {
            this.head = this.head.next;
         }
      }

      let node = this.head;
      let nodeToRemove = this.getAt(index);

      while (node) {      
         if (node.next === nodeToRemove) {
            node.next = nodeToRemove.next;
         }

         node = node.next;
      }
   }
}

// ----------------------------------------------------------

// Basic test of the Node itself, its linkability
let n = new Node('There');
console.log(n.data);
console.log(n.next);

let n2 = new Node('Hi', n);
console.log(n2.next);

// Creation of the linked list
let list = new LinkedList();
console.log(list.head);

module.exports = { Node, LinkedList };
