# secret-number-game
How to Play the Secret Number Game:  Start the game and see a welcome message. Guess a number between 1 and 100. Receive feedback if your guess is too high or too low. Keep guessing until you find the secret number. Win by guessing correctly and see a congratulatory message.

Secret Number Game Code Description:

Welcome Message:

The game starts with an alert message welcoming the player: Welcome to the Secret Number Game!.
Initialization:

maxNumber is set to 100, defining the range of possible secret numbers.
secretNumber is randomly generated between 1 and 100 using Math.random().
guess is declared but not initialized.
guessTakes is initialized to 1 to keep track of the number of guesses.
Game Loop:

The while loop runs until the player guesses the secret number.
Inside the loop, the player is prompted to guess a number between 1 and 100.
If the guess is correct (guess == secretNumber), the loop breaks.
If the guess is incorrect, the player receives a hint:
If the guess is too low, an alert suggests guessing a higher number.
If the guess is too high, an alert suggests guessing a lower number.
The number of guesses (guessTakes) is incremented after each incorrect guess.
End of Game:

Once the correct number is guessed, a message is displayed showing the number of guesses it took to find the secret number.
The message adapts to use "guess" or "guesses" based on the number of attempts.
