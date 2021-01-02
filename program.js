
function printStar(number) {
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            console.log("*")
        }
    }
}

printStar(24);