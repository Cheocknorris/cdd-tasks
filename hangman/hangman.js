// REVIEW COMMENT
// This is in general not a good practice to create global variables. 
// Defines classes and clearly defined namespace for creating state variables. 

const words = ['array', 'list', 'queue', 'stack'];
const resultWordElement = document.getElementById('word');
const hangmanElements = document.querySelectorAll('.hangman');

// REVIEW COMMENT
// this defines the initial state of the game or the reset state. So you can put in a reset function and call that
let correctLetters = [];
let wrongLetters = [];
let randomWord = words[Math.floor(Math.random() * words.length)];
displayHiddenWord();

// REVIEW COMMENT
// settings event listens should be part of initialization
window.addEventListener('keydown', playWithKeyBoard);

// REVIEW COMMENT
// global index variable not nice
let index = 0;

// REVIEW COMMENT
// this is actually nice idea to play the game that the game detects
// directly the keyboard strokes :) I like it. 
// But the function is too long :D
function playWithKeyBoard(e) {
    // constant numbers should be converted to the global constants to signify which key they represent. 
    // also the key code check should be a seperate function. 
    // something like isAlphabet()
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        let letter = e.key;

        if (randomWord.includes(letter) && !correctLetters.includes(letter)) {
            updateCorrectLetters(letter)
            displayHiddenWord();

            let innerWord = resultWordElement.innerText.replace(/\n/g, '');
            if (innerWord === randomWord.toUpperCase()) {
                endGameWithWin();
            }
        }
        // if both large if conditions cannot be true at the same time they should be connected with "else if" for performance
        if (!randomWord.includes(letter) && !wrongLetters.includes(letter)) {
            updateWrongLetters(letter);
            index++;
            if (index === hangmanElements.length - 1) {
                // nice name of function :)
                endGameWithLose();
            } else {
                updateHangman();
                displayWrongLetters();
            }
        }
    }
}

function updateCorrectLetters(letter) {
    correctLetters.push(letter);
}

function updateWrongLetters(letter) {
    wrongLetters.push(letter);
}

function displayHiddenWord() {
    // REVIEW COMMENT
    // this kind of html insertion is not nice. 
    // either stick to dom creation based on dom functions or hidden pre-existing html templates
    resultWordElement.innerHTML = `
    ${randomWord
            .split('')
            .map(letter => `
            <span class='letter'>
                ${correctLetters.includes(letter) ? letter : ''}
            </span>
        `).join('')
        }`
}

function displayWrongLetters() {
    const wrongLettersElement = document.querySelector('.wrong-letters-container');
    wrongLettersElement.innerHTML = `
        ${wrongLetters.length > 0 ? `<p>These letters are wrong:</p>` : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;
}

function updateHangman() {
    for (let i = 0; i < hangmanElements.length; i++) {
        hangmanElements[i].classList.remove('visible');
    }
    hangmanElements[index].classList.add('visible');
}

function endGameWithWin() {
    // REVIEW COMMENT
    // if there is only one object based on a className, it is better to cretae the id for this element
    // clases are usually for more than one elements on a page and hence should be only used with querySelectorAll
    const win = document.querySelector('.win');
    win.classList.add("show");
    window.removeEventListener('keydown', playWithKeyBoard);
}

function endGameWithLose() {
    const lose = document.querySelector('.lose');
    updateHangman();
    lose.classList.add("show");
    window.removeEventListener('keydown', playWithKeyBoard);
}

const playAgainElement = document.querySelector('button');

playAgainElement.addEventListener('click', function reset() {
    const popUpElements = document.querySelectorAll('.pop-up');
    // REVIEW COMMENT
    // this is the init or reset scenario
    index = 0;
    correctLetters = [];
    wrongLetters = [];

    randomWord = words[Math.floor(Math.random() * words.length)];
    displayHiddenWord();
    displayWrongLetters();
    updateHangman();

    for (let i = 0; i < popUpElements.length; i++) {
        popUpElements[i].classList.remove('show');
    }

    window.addEventListener('keydown', playWithKeyBoard);
});
