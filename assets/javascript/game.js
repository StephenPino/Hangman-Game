var lives = 12;
var wins = 0
var words = [
	"rockets", 
	"thunder", 
	"spurs"
];
var attempts = [];
var displayString = [];
var correctAttempts = [];
var accumulator = 0
var losses = 0


// Chooses a random word from "words" array
function chooseWord () {
	var key = Math.floor(Math.random()*words.length);
	var word = words[key];
    return word;

}


// Sets "_" for each character in word given
function blanksFromAnswer ( answerWord ) {
    
    var result = ""; // This is the variable we want to use
    
    for(var i = 0; i < answerWord.length; i++ ) {
    	result += "_";
    }

    document.getElementById("current-word-div").innerHTML = result;
    
    
    return result;
}

// resets game
function reset() {
	lives = 12;
	wins = 0
	attempts = [];
	displayString = [];
	correctAttempts = [];
	accumulator = 0;
	document.getElementById("letters-guessed-div").innerHTML = ""


	return;
}
 
// Upon window load...
window.onload = function() {

		var el = document.getElementById("lives-remaining-div");
		el.innerHTML = lives;


	// Run the chooseWord function and save the random word chosen in the variable "word"
	var word = chooseWord();

	// Run the blanksFromAnswer function and pass through the variable word
	blanksFromAnswer(word)

		if(lives <= 0) {
			alert("You Lose!");
			reset();

		}

		else{	

	// When the user presses a key it will run the following function...
	document.onkeyup = function(event) {

		if(lives <= 0) {
			
			
			playAgain = confirm("You Lose! Play Again?");
			if (playAgain !== true) {
				return false;
			}
			else{
			losses++
			document.getElementById("losses-div").innerHTML = losses
			reset();
			word = chooseWord();
			blanksFromAnswer(word);
			}
		}

		

			// Stores the users guess as a variable
			var userGuess = event.key;

			// If the current guess is already in the attempts array, stop the function
			if(attempts.includes(userGuess)) {
				alert("This letter has already been guessed, try another!");

				return false;
			}

			// Pushes the guessed letter to the guessed letter array
			attempts.push(userGuess);

			// Checks to see if userGuess is in the active word
			var checkLetter = word.indexOf(userGuess);


			// If the chosen letter is not in the active word...
			if(checkLetter < 0) {

				// Remove 1 life
				lives--;

				// Add the letter to the letters-guessed div
				document.getElementById("letters-guessed-div").innerHTML += userGuess;

				// Adds remaining lives to UI
				
				el.innerHTML = lives;

			}

			   // If the chosen letter is in the active word
    else {
      // Pushes the user guess into the correctAttempts array
      correctAttempts.push(userGuess);
      accumulator++
      var test = displayString
      for( var i = 0; i < word.length; i++) {
        if((word.charAt(i) === userGuess) && (accumulator <= 1)) {
          displayString += (userGuess);
          document.getElementById("current-word-div").innerHTML = displayString;
        }
        else if((word.charAt(i) !== userGuess) && (accumulator <= 1)){
          displayString += "_";
          document.getElementById("current-word-div").innerHTML = displayString;
        }
        else if((word.charAt(i) === userGuess) && (accumulator > 1)) {
          test = displayString.replace(displayString.charAt(i), word.charAt(i));
          	document.getElementById("current-word-div").innerHTML = test; 


        }
        else{
          test = displayString.replace(displayString.charAt(i), "_");
          document.getElementById("current-word-div").innerHTML = test; 
        }
        
      }
    }
		
		
	} //document.onkeyup


} //window.onload
}