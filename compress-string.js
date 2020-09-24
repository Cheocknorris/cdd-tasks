
// Write a function to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa
// would become a2b1c5a3. If the “compressed” string would not become smaller than the original string, your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a -z).


function compressString(str) {
    let strArray = str.split('');
    let count = 1;
    let compressedArray = [];

    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] !== strArray[i + 1])
        {
            compressedArray.push(strArray[i], count)
            count = 1;
        } else {
            count++;
        }
    }
    let compressedString = compressedArray.join('');

    if (compressedString.length < str.length) {
        return compressedString;
    } else {
        return str;
    }
}

compressString('abcccccaaa');
compressString('aabcccccaaa');
