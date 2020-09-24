// Write a function to find the first non repeating number in an array.
// Example: [2,3,4,5,6,7,5,4,3,2,6, 8, 9] - return 7


function findNonRepeated(arr) {
    const uniqueArray = [];
    const sortedArr = arr.sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] !== sortedArr[i - 1] && sortedArr[i] !== sortedArr[i + 1]) {
            uniqueArray.push(sortedArr[i]);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.includes(arr[i])) {
            console.log(arr[i]);
        }
    }
}

findNonRepeated([2,3,4,5,6,8,5,4,3,2,6,7, 9]);
