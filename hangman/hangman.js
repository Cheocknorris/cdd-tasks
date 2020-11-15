
(function () {

const words = ['array', 'list', 'queue', 'stack'];
const resultWordElement = document.getElementById('word');
const hangmanElements = document.querySelectorAll('.hangman');
let correctLetters = [];
let wrongLetters = [];
let randomWord = words[Math.floor(Math.random() * words.length)];

displayHiddenWord();

window.addEventListener('keydown', playWithKeyBoard);


let index = 0;
function playWithKeyBoard(e) {
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
        if (!randomWord.includes(letter) && !wrongLetters.includes(letter)) { 
            updateWrongLetters(letter);
            index++;
            if (index === hangmanElements.length - 1) {
            endGameWithLose()
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

})();

