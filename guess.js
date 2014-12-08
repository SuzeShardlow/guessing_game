// TODO
var secretNumber;

function computeNumber() {
    // This function will make the computer think of a number between 1 and 100
    return Math.floor(Math.random() * 100 + 1);
}

function numberCheck(userGuess, minimum, maximum) {
    // This function checks that the guess is between the minimum and maximum
    // TODO make sure it's a whole number
    if (userGuess >= minimum && userGuess <= maximum) {
        return true;
    } else {
        return false;
    }
}

function userGuessed() {
    // This function gets the number that the user guessed and compares it to the number the computer thought of
    var userNumber = document.getElementById("userGuess").value;
    if(numberCheck(userNumber,1,100)) {
        if(userNumber>secretNumber) {
            // Guess too high
            alert("Your guess is too high.");
        } else {
            if(userNumber<secretNumber) {
                // Guess too low
                alert("Your guess is too low.");
            } else {
                // Guess is correct
                alert("Your guess is correct.");
            }
        }
    } else {
        alert("Your guess needs to be between 1 and 100.");
    }
}

window.onload = function() {
    document.getElementById("guessButton").onclick=userGuessed;
    secretNumber=computeNumber();
    console.log(secretNumber);
}