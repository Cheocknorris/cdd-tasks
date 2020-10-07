
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


