// Write a function to find the first non repeating number in an array.
// Example: [2,3,4,5,6,7,5,4,3,2,6, 8, 9] - return 7


function findNonRepeated(arr) {
    if (!Array.isArray(arr)) return null;
    const arrDup = [...arr];
    const argMap = new Map();
    

    for (let i = 0; i < arrDup.length; i++) {
        if (!argMap.has(arrDup[i])) {
            argMap.set(arrDup[i], 0);
        } else {
            argMap.set(arrDup[i], 1);
        }
    }

    const argArr = [...argMap];

    // console.log(argArr);

    const result = argArr.find((index) => index[1] === 0)[0];

    return result;
}

findNonRepeated([2, 5, 2, 3, 4, 3]);

