// What is the time complexity of the follow function for n=8

function doSomething1() {
    let N = 8;
    for (let i = 1; i <= N; i++) {
        console.log(i);
      for (let j = 1; j < 8; j = j * 2) {
        console.log(j);
      }
    }
    return 'finished';
}
doSomething1();
// O(n log n)
// O(8 * 4)
// O(32)


function doSomething2() {
    let N = 32; // or 64 or 128
    for (let i = 1; i < N; i = i * 2) {
      console.log("I am busy");
    }
}
doSomething2();
// O(n log n)
// N=32 performs 5 searches, N=64 performs 6 and N=128 performs 7

function doSomething3() {
    let a = 0;
    let N = 32;
    for (let i = 0; i < N; i++) {
      for (let j = N; j > i; j--) {
        a = a + i + j;
      }
    }
    return a;
}
doSomething3();
// On^2