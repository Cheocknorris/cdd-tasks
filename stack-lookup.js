class Stack {
    constructor() {
      this.store = new Array(1000);
      this.stackPointer = -1;
    }
  
    push(value) {
      this.stackPointer++;
      this.store[this.stackPointer] = value;
      return true;
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
        let stackPointerDup = this.stackPointer;
        while (stackPointerDup >= 0) {
          if (this.store[stackPointerDup] === value) {
            return stackPointerDup;
          }
          stackPointerDup--;
        }
        return -1;
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
  console.log(stack.push(4), true);
  console.log(stack.push(5), true);
  console.log(stack.push(6), true);
  console.log(stack.pop(), 6);
  console.log(stack.push(7), true);
  console.log(stack.lookUp(3));
  
