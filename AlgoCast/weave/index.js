// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'
// while     Queue { data: [ 'four', 4, 'three', 3, 'two', 2, 'one', 1 ] }
// recursive Queue { data: [ 'four', 4, 'three', 3, 'two', 2, 'one', 1 ] }

const Queue = require("./queue");

// function weave(sourceOne, sourceTwo, newQueue = new Queue()) {
//   if (sourceOne.peek() !== undefined) {
//     console.log(sourceOne.peek());
//     newQueue.add(sourceOne.remove());
//   }
//   if (sourceTwo.peek() !== undefined) {
//     console.log(sourceTwo.peek());
//     newQueue.add(sourceTwo.remove());
//   }

//   if (sourceOne.peek() === undefined && sourceTwo.peek() === undefined) {
//     console.log("recursive", newQueue);
//     return newQueue;
//   }
//   weave(sourceOne, sourceTwo, newQueue);
// }

function weave(sourceOne, sourceTwo) {
  const newQueue = new Queue();
  while (sourceOne.peek() !== undefined || sourceTwo.peek() !== undefined) {
    if (sourceOne.peek() !== undefined) {
      newQueue.add(sourceOne.remove());
    }
    if (sourceTwo.peek() !== undefined) {
      newQueue.add(sourceTwo.remove());
    }
  }
  console.log("while", newQueue);
  return newQueue;
}

module.exports = weave;
