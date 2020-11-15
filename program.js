// For a givem argument number print that number of lines and one * for each

function printStar(number) {
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            console.log("*")
        }
    }
}

function printStar(4);