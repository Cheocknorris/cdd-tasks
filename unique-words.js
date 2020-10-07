// Ques : Print all the non-repeating words out of two given sentences.
// Example - 
// Sentence 1:			I have a blue pen.
// Sentence 2: 		I got a red pen.
// Output: 			have blue got red.

function findUniqueWords(sentence1, sentence2) {
    if (typeof sentence1 !== 'string' || typeof sentence2 !== 'string') throw new Error('Invalid input')

    let firstSentence = sentence1.split(' ');
    let secondSentence = sentence2.split(' ');
    let uniqueWords = [];

    let stringComparer = new Map();

    addStringsToComparer(firstSentence, stringComparer);
    addStringsToComparer(secondSentence, stringComparer);
    
    for (let [key, value] of stringComparer) {
        if (value === 'unique') uniqueWords.push(key);
    }

    return `${uniqueWords.join(' ')}.`;
}



function addStringsToComparer(arr, stringComparer) {
    for (let word of arr) {
        if (!stringComparer.has(word)) {
            stringComparer.set(word, 'unique')
        } else {
            stringComparer.set(word, 'repeated')
        }
    }
}

console.log(findUniqueWords('I have a blue pen', 'I got a red pen'), "have blue got red.");
console.log(findUniqueWords('I have a blue pen', 1), "invalid input");