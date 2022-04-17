// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

/*
 * TASK: Using single and double-incrementing node variables to traverse a linked list, checkinq 
 *       equality as they iterate. If at any point (except for head) the variables 'slow' and 'fast'
 *       are equivalent, then that means that a node (fast) is in fact pointing back at a previous
 *       node (slow) and therefore the list is circular. 
 * 
 *       If, however, at any point the fast node is pointing at a null reference, then the linked list
 *       is obviously not circular as it has an end (as defined by the final null pointer from next).
 * 
 *       An important thing to realize is that if you have a list of a finite length and you have
 *       single and double-incrementing variables being compared continously while traversing the list,
 *       and assuming the list is circular, then it is possible that every single node will be checked
 *       against every single other node. Hence why the approach is valid.
 */

// My implementation
function circular(list) {
   let slow = list.head;
   let fast = list.head;

   while (fast) {
      if (!fast.next || !fast.next.next) {
         return false;
      } 

      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
         return true;
      }
   }
}

// Grider's implementation
function circularAlt(list) {
   let slow = list.getFirst();
   let fast = list.getFirst();

   while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
         return true;
      }
   }

   return false;
}

module.exports = circular;
