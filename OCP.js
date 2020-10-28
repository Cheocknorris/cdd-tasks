// Apply OCP to the following class so that adding new math operations 
// doesn’t require changing the class Calculator. 

// class Calculator {
//    #result;
//    add(a, b) {
//        this.#result = a + b;
//    }
//    subtract(a, b) {
//        this.#result = a - b;
//    }
//    multiply(a, b) {
//        this.#result = a * b;
//    }
//    divide(a, b) {
//        this.#result = a / b;
//    }
//    getResult() {
//        return this.#result;
//    }
// }

class Calculator {
    #result;

    performOperation(operation) {
       this.#result = operation.perform();
       return this.#result;
    }

}

class Sum {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    
    perform() {
        return this.a + this.b;
    }
}

class Subtract {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    perform() {
        return this.a - this.b;
    }
}

class Multiply {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    perform() {
        return this.a * this.b;
    }
}

class Divide {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    
    perform() {
        return this.a / this.b;
    }
}

const calculator = new Calculator;

console.log(calculator.performOperation(new Sum(3, 4)), 7);
console.log(calculator.performOperation(new Subtract(4, 3)), 1);
console.log(calculator.performOperation(new Multiply(3, 4)), 12);
console.log(calculator.performOperation(new Divide(12, 4)), 3);
