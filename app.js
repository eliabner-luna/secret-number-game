alert('Welcome to the Secret Number Game!');

let maxNumber = 100
let secretNumber = parseInt(Math.random() * maxNumber + 1);
console.log(secretNumber);
let guess;
let guessTakes = 1 


while (guess != secretNumber) {
    guess = prompt(`Pick a number between 1 e ${maxNumber}`);
    if (guess == secretNumber) {
    break;
    } else {
        if (guess < secretNumber) {
            alert(`Try guessing a higher number than ${guess}!`);
        } else {
            alert(`Try guessing a lower number than ${guess}!`);
        }
        //guessTakes = guessTakes + 1;
        guessTakes++;
    }

}

let guessWord = guessTakes > 1 ? 'guesses' : 'guess';

 alert(`Nice! You did it! With ${guessTakes} ${guessWord}, you discovered that my secret number was ${secretNumber}!`);