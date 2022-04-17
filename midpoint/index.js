// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

/*
 * TASK: Here, we start both 'slow' and 'fast' as the head of the linked. While fast exists,
 *       we check to see whether fast.next or fast.next.next is null. If yes, then we return
 *       the slow node.
 * 
 *       How does this work? Well, basically, the fast node is incrementing by two references
 *       whereas the slow node is only incrementing by one reference (1/2). As such, when 'fast' has
 *       reached the end of the list, the 'slow' node will be at the midpoint (or, if the list
 *       is even, it will be the first of the two middle node references).
 */

// My implementation
function midpoint(list) {
   let slow = list.head;
   let fast = list.head;

   while (fast) {
      if (!fast.next || !fast.next.next) {
         return slow;
      } 
      else {
         slow = slow.next;
         fast = fast.next.next;
      }
   }
}

// Grider's implementation
function midpointAlt(list) {
   let slow = list.getFirst();
   let fast = list.getFirst();

   while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
   }

   return slow;
}

module.exports = midpoint;
