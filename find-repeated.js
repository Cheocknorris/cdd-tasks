function findFirstRepeated(arr) {
    if (!Array.isArray(arr)) return null;
    const arrDup = [...arr];
    const argMap = new Map();

    arrDup.forEach((index) => {
        if (!argMap.has(index)) {
            argMap.set(index, 0);
        } else {
            argMap.set(index, 1);
        }
    });

    const mapArr = [...argMap];

    console.log(mapArr);

    // Error - give error if arr is empty array
    const result = mapArr.find(index => index[1] === 1)[0];
    return result;
}

console.log(findFirstRepeated([2, 3, 3, 4, 5, 6, 7, 5, 6, 8, 9]));
console.log(findFirstRepeated([]));