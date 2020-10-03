class Stack {
    constructor() {
      this.store = new Array(1000);
      this.stackPointer = -1;
    }
  
    push(value) {
      this.stackPointer++;
      this.store[this.stackPointer] = value;
    }
  
    pop() {
      if (this.isEmpty()) return null;
      let topElement = this.store[this.stackPointer--];
      return topElement;
    }

    lookUp(value) {
        if (!value) {
            throw new Error('Invalid input');
        } 
        if (this.isEmpty()) return false;
        for (let i = 0; i < this.store.length; i++) {
            if (this.store[i] === value) {
                return true
            }
        }
        return false;
    }
    
    isEmpty() {
      return this.stackPointer < 0;
    }
  
    peek() {
      if (this.isEmpty()) return null;
  
      return this.store[this.stackPointer];
    }
  }
  
  let stack = new Stack();
  console.log(stack.isEmpty(), 'true');
  console.log(stack.peek(), 'null');
  console.log(stack.push(4));
  console.log(stack.push(5));
  console.log(stack.push(6));
  console.log(stack.lookUp());
