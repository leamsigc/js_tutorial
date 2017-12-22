/**
 * GAME FUNCTION
 * Player must guess a number between a min and max
 * get a certain number of guesses
 * Notify player of remaining guesses
 * Notify the player of correct answer if loose
 * Let player choose to play again
 */
let min = 1,
    max = 10,
    winningNumber = randomNumber(min, max),
    guessesLeft = 3;
console.log(winningNumber);
// Ui Elements
const gameWrapper = document.getElementById('game');
const minNumber = document.querySelector('.min_num');
const maxNumber = document.querySelector('.max_num');

const guessInput = document.getElementById('guess_input');
const guessBnt = document.querySelector('#guess_Btn');
// const guessCounter = document.querySelector('.counter');

// message p
const message = document.querySelector('.message');

// assign the min and max in the UI
// minNumber.innerHTML = min;
// maxNumber.innerHTML = max;
minNumber.textContent = min;
maxNumber.textContent = max;
// guessCounter.textContent = guessesLeft;

//add event listener for the game wrapper element
gameWrapper.addEventListener('mousedown', (e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains('play-again')) {
        window.location.reload();
    }
});

// Add event listener for the guessBtn
guessBnt.addEventListener('click', checkGuess);

// checkGuess
function checkGuess() {
    let inputValue = parseInt(guessInput.value);
    console.log(inputValue);
    if (!inputValue || inputValue > max || inputValue < min) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    // check if is the winning number
    if (inputValue === winningNumber) {
        //set input state
        setInputState(true, 'green');
        setMessage('Congratulation you have won the game !!!!', 'green');

    } else {
        guessesLeft--;
        if (guessesLeft === 0) {
            setInputState(true, 'red');
            // guessCounter.textContent = guessesLeft;
            setMessage(`Sorry you have  losses the game, the correct number is ${winningNumber}`, 'red');
        } else {
            setInputState(false, 'orange');
            // guessCounter.textContent = guessesLeft;
            setMessage(`Wrong Number ${inputValue} You have ${guessesLeft} guesses left.`, 'orange');
        }

    }
    guessInput.value = '';
}


// set message
function setMessage(textMessage, color) {
    message.style.color = color;
    message.textContent = textMessage;
}

function setInputState(disable, color) {
    // Disable the input
    guessInput.disabled = disable;
    //change the border color;
    guessInput.style.borderColor = color;
    if (disable) {
        guessBnt.value = 'Play Again';
        guessBnt.className += 'play-again';
    }
}

// Random number 
function randomNumber(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
};