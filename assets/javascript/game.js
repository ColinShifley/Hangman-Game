//PseudoCode for Hangman

//(html)ask players to guess the letters with entries from keysboard 

//please press any key to start

//(js)

//Have a bank of random words/phrases for people guess
var words = ["Skynet", "Terminator", "JamesCameron", "T800", "T1000", "JohnConnor", "ArnoldSchwarzenegger", "JudgementDay", "Salvation", "Genisys"]
//variable used to calculate length of word chosen by computer
//var wordLength = chosenWord.length;
var guessed = []
var showy = []
//have computer chose random phrase to display

var chosenWord = words[Math.floor(Math.random() * words.length)];


//Display blank spaces that correlate with word/phrase to be guessed

//Register keystrokes as entries - Also run script to run all keystrokes as lowercase

//Reveal letters in the blank spaces if answered correct 

document.onkeypress = function(event) {
  searchWord(event.key);
  //console.log(event.key)
}

 function searchWord(searcher) {
   var wordLength = chosenWord.length;
   var displayText = ""
   if(guessed.indexOf(searcher) == -1) {
     guessed.push(searcher)
   }
   for(var i = 0; i < wordLength; i++) {
     if(guessed.indexOf(chosenWord[i].toLowerCase()) == -1) {
       displayText += " _ "
     } else {
       displayText += " " + chosenWord[i] + " "
     }
   }
   document.getElementById("blanks").innerHTML = displayText
 }

//show guessed letters
 function showWord(showit) {
   var showGuessed = ""
   for(var i = 0; i < wordLength; i++) {
      if(guessed[i].indexOf(chosenWord) == -1){
        showGuessed += " " + guessed[i] + " "
      }
 }
 document.getElementById("lets").innerHTML = showGuessed
}

//loads blanks to HTML page
function loadblanks() {
  var wordLength = chosenWord.length;
  var displayText = "";
  for (i = 0; i < wordLength; i++)  {
  displayText += " _ ";

}
document.getElementById("blanks").innerHTML = displayText
}