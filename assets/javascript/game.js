//User chooses 1 letter from A-Z selction
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;



///Computer choses random value from A-Z
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Allows the user 9 guesses
var updateGuessesLeft = function() {
  //Here we are grabbing the HTML element and setting it equal to the the users guessesLeft. 
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
  // Here we take the guesses the user has tried and displaying it as letters separated by commas. 
  document.querySelector('#lettr').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Function will be called when we reset everything
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


//When key is released, it becomes the users guess
document.onkeyup = function(event) {
	//if user guesses wrong, guessesLeft decreases by 1
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Yes, you are psychic!!!");
                reset();
            }
        }else if(guessesLeft == 0){
            // if user gets to 0 guesses, then user losers
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Darn, you're not psychic, maybe try again?!");
            // Then we'll call on the reset to start the game over
            reset();
        }
};
