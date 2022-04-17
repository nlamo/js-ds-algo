// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

/*
 * TASK: We start by assigning 'slow' and 'fast' to the head. Next, we ensure that the fast node ref
 *       is n spaces away from the slow node ref. Finally, we increment both of these node variable
 *       pointers normally (single-step) until fast.next is null. And now that we're at the end of
 *       list, the slow node will be n spaces from the end, and thus we return it.
 */

// My implementation
function fromLast(list, n) {
   let slow = list.head;
   let fast = list.head;

   for (let i = 0; i < n; i++) {
      fast = fast.next;
   }

   while (fast.next) {
      slow = slow.next;
      fast = fast.next;
   }

   return slow;
}

// Grider's implementation
function fromLastAlt(list, n) {
   let slow = list.getFirst();
   let fast = list.getFirst();

   while (n > 0) {
      fast = fast.next;
      n--;
   }

   while (fast.next) {
      slow = slow.next;
      fast = fast.next;
   }

   return slow;
}

module.exports = fromLast;
