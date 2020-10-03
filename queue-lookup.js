class Queue {
  constructor() {
    this.store = new Array(3);
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    if (this.rear === this.store.length) return null; // full

    this.store[this.rear] = value;
    this.rear++;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    let valueAtFront = this.store[this.front];
    this.front++;
    if (this.front == this.rear) {
      this.front = this.rear = 0;
    }
    return valueAtFront;
  }

  lookUp(value) {
    if (!value) {
      throw new Error('Invalid input');
    }

    if (this.isEmpty()) return -1;

    for (let i = 0; i < this.store.length; i++) {
      if (this.store[i] === value) {
        return i;
      }
    }
    return -1;
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.store[this.front];
  }

  isEmpty() {
    return this.front == this.rear;
  }
}


let queue = new Queue();
console.log(queue.isEmpty(), true);
console.log(queue.enqueue(5), true);
console.log(queue.enqueue(6), true);
console.log(queue.enqueue(7), true);
console.log('lookUp: ', queue.lookUp(5));
