// Optimize the following code
// function getNameFromList(searchName, listOfNames) {
//     let foundIndex = -1;
//     for (let i = 0; i < listOfNames.length; i++) {
//       if (listOfNames[i] === searchName) {
//         foundIndex = i;
//       }
//     }
//     if (foundIndex >= 0) {
//       return foundIndex;
//     }
//     return -1;
//    }


function getNameFromList(searchName, listOfNames) {
    if (typeof searchName !== 'string' || !Array.isArray(listOfNames)) {
        throw new Error('Invalid argument type');
    }

    for (let i = 0; i < listOfNames.length; i++) {
        if (listOfNames[i] === searchName) return i;
    }

    return -1;
}

console.log(getNameFromList('Eliseo', ['Jorge', 'Pedro', 'Eliseo', 'Ravi']));