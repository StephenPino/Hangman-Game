var lives = 12;
var wins = 0
var words = [
	"rockets", 
	"thunder", 
	"spurs"
];
var attempts = [];
var lettersArray = [];

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
    	result += "_ ";
    }

    document.getElementById("current-word-div").innerHTML = result;
    
    
    return result;
}

// Replaces nth letter with c character value for a given originalString and returns it as newString variable
function alterAt ( n, c, originalString ) {

   var stringToReturn = "";

   for( var i = 0; i < originalString.length; i++ ) {
   	

    	if( i !== n ){
			stringToReturn += originalString.charAt(i);

		} 
 	
 		else {
 			stringToReturn +=c;

 		}
   }
   return stringToReturn;
   

}
// Upon window load...
window.onload = function() {

		el = document.getElementById("lives-remaining-div");
		el.innerHTML = lives;


	// Run the chooseWord function and save the random word chosen in the variable "word"
	var word = chooseWord();

	// Run the blanksFromAnswer function and pass through the variable word
	blanksFromAnswer(word);

	// When the user presses a key it will run the following function...
	document.onkeyup = function(event) {

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
			el = document.getElementById("lives-remaining-div");
			el.innerHTML = lives;

		}

		// If the chosen letter is in the active word
		else {
			var newString = alterAt(word.indexOf(userGuess), userGuess, word;
		}

		
	}


}
