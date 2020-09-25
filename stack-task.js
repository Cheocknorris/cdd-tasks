class Stack {
    constructor() {
        this.store = [];
    }

    push(value) {
        this.store = [...this.store, value];
    }

    pop() {
        if (this.store.length === 0) {
            return null
        } else {
            let last = this.store[this.store.length - 1];
            this.store.length = this.store.length - 1;
            return last;
        }

    }

    isEmpty() {
        return this.store.length <= 0;
    }

    peek() {
        if (this.isEmpty()) return null;


        let topValue = this.store[this.store.length - 1];
        return topValue;
    }

}

let stack = new Stack();




console.log("is empty: ", stack.isEmpty());
console.log("peek: ", stack.peek());
stack.push(4);
stack.push(5);
stack.push(6);
console.log("is empty: ", stack.isEmpty());
console.log("peek: ", stack.peek());
console.log("pop: ", stack.pop());
console.log("peek: ", stack.peek());
console.log("pop: ", stack.pop());
console.log("peek: ", stack.peek());
