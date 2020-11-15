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

let queue = new Queue(3);
console.log(queue.enqueue(9)); // true
console.log(queue.enqueue(4)); // true
console.log(queue.enqueue(20)); // true
console.log(queue.isFull()); // true
console.log(queue.enqueue(30)); // false overflow
console.log(queue.dequeue()); // 9
console.log(queue.dequeue()); // 4
console.log(queue.dequeue()); // 20
console.log(queue.isEmpty()); // true
