//
// Write a function that reverses a string word by word.
// Example: “This is a computer” should be converted to “computer a is This”.


function reverseString(str) {
    let stringArray = str.split(' ');
    let reversedArray = stringArray.reverse();
    let reversedString = reversedArray.join(' ');
    return reversedString;
}

function reverseString(str) {
    return str.split(' ').reverse().join(' ');
}
