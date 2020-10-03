class SimpleQueue {
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
    if (this.isEmpty()) return null;
    return this.storage.shift();
  }
  lookUp(value) {
    if (!value) {
      throw new Error('Invalid input');
    }

    if (this.isEmpty()) return -1;

    return this.storage.indexOf(value);
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
    this.priorityArray = [];
  }

  enqueue(value, priority) {
    if (this.priorityArray[priority]) {
      let queue = this.priorityArray[priority];
      queue.enqueue(value);
    } else {
      let queue = this.priorityArray[priority] = new SimpleQueue(1000);
      queue.enqueue(value);
    }

    return true;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    for (let i = this.priorityArray.length - 1; i >= 0; i--) {
      let queue = this.priorityArray[i];
      if (queue && !queue.isEmpty()) {
        return this.priorityArray[i].dequeue();
      }
    }
  }

  peek() {
    if (this.isEmpty()) return null;

    for (let i = this.priorityArray.length - 1; i >= 0; i--) {
      if (this.priorityArray[i]) {
        return this.priorityArray[i].peek();
      }
    }
  }

  lookUp(value) {
    if (!value) {
      throw new Error('Invalid input');
    }

    if (this.isEmpty()) return -1;

    // there is a queue if it is not empty
    for (let i = this.priorityArray.length - 1; i >= 0; i--) {
      if (this.priorityArray[i]) {
        let index = this.priorityArray[i].lookUp(value);
        if (index >= 0) return index;
      }
    }
    return -1;
  }

  isEmpty() {
    return this.priorityArray.length == 0;
  }
}

let priorityQueue = new PriorityQueue();
console.log(priorityQueue.isEmpty(), true);
console.log(priorityQueue.peek(), null);
console.log(priorityQueue.enqueue(4, 1), true);
console.log(priorityQueue.enqueue(9, 1), true);
console.log(priorityQueue.enqueue(20, 2), true);
console.log(priorityQueue.enqueue(23, 3), true);
console.log(priorityQueue.enqueue(24, 3), true);
console.log(priorityQueue.enqueue(24, 2), true);
console.log(priorityQueue.enqueue(24, 1), true);
console.log(priorityQueue.peek(), 24);
console.log(priorityQueue.lookUp(24), 1);
