class Queue {
    constructor(queueSize) {
        // storage for the priority queue
        this.storage = [];
        this.size = queueSize;
    }
    enqueue(value) {
        if (this.isFull()) return false;
        this.storage.push(value); // add at end
        return true;
    }
    dequeue() {
        // if the queue is empty, return null
        if (this.isEmpty()) return null;
        // otherwise remove element from the front and return
        return this.storage.shift();
    }
    peek() {
        if (this.isEmpty()) return null;
        return this.storage[0];
    }
    isEmpty() {
        return this.storage.length == 0;
    }
    isFull() {
        return this.storage.length === this.size;
    }
}

class PriorityQueue {
    constructor() {
        this.queues = [];
    }

    enqueue(value, priority) {
        if (this.queues[priority]) {
            let queue = this.queues[priority];
            queue.enqueue(value);
        } else {
            let queue = this.queues[priority] = new Queue;
            queue.enqueue(value);
        }
    }

    dequeue() {
        for (let i = this.queues.length - 1; i >= 0; i--) {
            let queue = this.queues[i];
            if (queue && !queue.isEmpty()) {
                return queue.dequeue();
            }
        }
    }


}


let priorityQueue = new PriorityQueue();

priorityQueue.enqueue(4, 5);
priorityQueue.enqueue(5, 3);
priorityQueue.enqueue(4, 1);
priorityQueue.enqueue(1, 2);
priorityQueue.dequeue();
priorityQueue.dequeue();
priorityQueue.dequeue();
priorityQueue.dequeue();
console.log(priorityQueue.queues);


// class SimpleQueue {
//     constructor(queueSize) {
//       // storage for the priority queue
//       this.storage = [];
//       this.size = queueSize;
//     }
//     enqueue(value) {
//       if (this.isFull()) return false;
//       this.storage.push(value); // add at end
//       return true;
//     }
//     dequeue() {
//       if (this.isEmpty()) return null;
//       return this.storage.shift();
//     }
//     peek() {
//       if (this.isEmpty()) return null;
//       return this.storage[0];
//     }
//     isEmpty() {
//       return this.storage.length == 0;
//     }
//     isFull() {
//       return this.storage.length === this.size;
//     }
//   }

//   class PriorityQueue {
//     constructor() {
//       this.priorityArray = [];
//     }

//     enqueue(value, priority) {
//       if (this.priorityArray[priority]) {
//         let queue = this.priorityArray[priority];
//         queue.enqueue(value);
//       } else {
//         let queue = this.priorityArray[priority] = new SimpleQueue();
//         queue.enqueue(value);
//       }

//       return true;
//     }

//     dequeue() {
//       if (this.isEmpty()) return null;

//       for (let i = this.priorityArray.length - 1; i >= 0; i--) {
//         let queue = this.priorityArray[i];
//         if (queue && !queue.isEmpty()) {
//           return this.priorityArray[i].dequeue();
//         }
//       }
//     }

//     peek() {
//       if (this.isEmpty()) return null;

//       for (let i = this.priorityArray.length - 1; i >= 0; i--) {
//         if (this.priorityArray[i]) {
//           return this.priorityArray[i].peek();
//         }
//       }
//     }

//     isEmpty() {
//       return this.priorityArray.length == 0;
//     }
//   }




//   let queue = new Queue(3);
//   console.log(queue.enqueue(9)); // true
//   console.log(queue.enqueue(4)); // true
//   console.log(queue.enqueue(20)); // true
//   console.log(queue.isFull()); // true
//   console.log(queue.enqueue(30)); // false overflow
//   console.log(queue.dequeue()); // 9
//   console.log(queue.dequeue()); // 4
//   console.log(queue.dequeue()); // 20
//   console.log(queue.isEmpty()); // true
