// Ques : Print all the non-repeating words out of two given sentences.
// Example - 
// Sentence 1:			I have a blue pen.
// Sentence 2: 		I got a red pen.
// Output: 			have blue got red.

// REVIEW COMMENT
// can be optimized, but good use of maps
function findUniqueWords(sentence1, sentence2) {
    if (typeof sentence1 !== 'string' || typeof sentence2 !== 'string') {
        throw new Error('Invalid input');
    }

    let firstSentence = sentence1.split(' ');
    let secondSentence = sentence2.split(' ');
    let uniqueWords = [];
    let stringComparer = new Map();

    try {
        addStringsToComparer(firstSentence, stringComparer);
        addStringsToComparer(secondSentence, stringComparer);
        collectUniqueWords(stringComparer, uniqueWords);
        return `${uniqueWords.join(' ')}.`;
    } catch (e) {
        console.log(e);
    }
}

function addStringsToComparer(arr, map) {
    if (!Array.isArray(arr)
        || map instanceof Map === false) {
        throw new Error('unable to compare sentences');
    }

    for (let word of arr) {
        if (!map.has(word)) {
            map.set(word, 'unique')
        } else {
            map.set(word, 'repeated')
        }
    }
}

function collectUniqueWords(map, arr) {
    if (!Array.isArray(arr) || map instanceof Map === false) {
        throw new Error('unable to store unique words');
    }

    for (let [key, value] of map) {
        if (value === 'unique') arr.push(key);
    }
}

console.log(findUniqueWords('I have a blue pen', 'I got a red pen'), "have blue got red.");
console.log(findUniqueWords('I have a blue pen', 1), "invalid input");