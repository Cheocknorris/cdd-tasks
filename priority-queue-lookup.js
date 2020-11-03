class Queue {
  constructor() {
    this.store = new Array(100);
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
      
      if (this.isEmpty()) return false; 
      
      let frontDup = this.front;
      while (frontDup <= this.rear) {
        if (this.store[frontDup] === value) return frontDup;
        frontDup++;
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

class PriorityQueue {
    constructor() {
      this.priorityArray = [];
    }
  
    enqueue(value, priority) {
      if (this.priorityArray[priority]) {
        let queue = this.priorityArray[priority];
        queue.enqueue(value);
      } else {
        let queue = this.priorityArray[priority] = new Queue();
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
      if (this.isEmpty()) return null;
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
console.log(priorityQueue.enqueue(24, 3), true);
console.log(priorityQueue.enqueue(24, 2), true);
console.log(priorityQueue.enqueue(24, 1), true);
console.log(priorityQueue.peek(), 24);
console.log(priorityQueue.lookUp(20), 'lookUp');



  