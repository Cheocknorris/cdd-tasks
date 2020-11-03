// A fibonacci series is defined as 
// Term(n) = Term(n-1) + Term(n-2); 
// Except the first two terms being 0 and 1;

// Example = 0, 1, 1, 2, 3, 5, 8, 13 and so on. 

// Write a function to print the first N terms of the fibonacci series.
// Example - 
// fibonacci(4) prints 0, 1, 1, 2
// fibonacci(6) prints 0, 1, 1, 2, 3, 5
// fibonacci(8) prints 0, 1, 1, 2, 3, 5, 8, 13

function generateFibonacci(fibonacciLength) {
    
    if (fibonacciLength < 1 || typeof fibonacciLength !== 'number') throw new Error('Invalid input');
    
    let series = [0, 1];

    if (fibonacciLength === 1) return [0]; 
    if (fibonacciLength === 2) return [0, 1];

    for (let i = 2; i < fibonacciLength; i++) {
        series.push(series[series.length -1] + series[series.length -2]);
    }

   return series; 
}

console.log(generateFibonacci(1), [0]);
console.log(generateFibonacci(2), [0, 1]);
console.log(generateFibonacci(3), [0, 1, 1]);
console.log(generateFibonacci(8), [0, 1, 1, 2, 3, 5, 8, 13]);
console.log(generateFibonacci(-1), 'invalid input');


