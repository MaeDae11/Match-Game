var MatchGame = {};
var $BOX = $('.box-row-1');
// var $myData = $(".card-numbers");
/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var matchOne = [8, 7, 6, 5, 4, 3, 2 , 1];
  var matchTwo = [8, 7, 6, 5, 4, 3, 2 , 1];
  var concatMatch = matchOne.concat(matchTwo);
  var randomArray = shuffleArray(concatMatch);
  var $game;
  MatchGame.renderCards(randomArray, $game);
};

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i --) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  };
  return array;
};
/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  // $game.empty();
  // console.log(cardValues)
  // var 
  // var $myData = $BOX.data("0");
  
  $.each($('.card-numbers').data(), function (i, cardValues){
    $('.card-numbers').text(cardValues[i]);
  }
  // $.each(cardValues, function (i){
    // $('.card-numbers').text(cardValues[i])
    // $(".card-numbers").text(cardValues[i])
    // console.log(cardValues[i])
);
  // colorBackground(cardValues);

};

function colorBackground(cardValues) {
  $(cardValues).each( function (){
    if ($myData === 1){
      $BOX.css("background-color", "yellow")
    } else if ($myData === 2) {
      $BOX.css("background-color", "blue")
    } else if ($myData === 3) {
      $BOX.css("background-color", "pink")
    } else if ($myData === 4) { 
      $BOX.css("background-color", "purple")
    } else if ($myData === 5) {
      $BOX.css("background-color", "green")
    } else if ($myData === 6) {
      $BOX.css("background-color", "lightgrey")
    } else if ($myData === 7) {
      $BOX.css("background-color", "black")
    } 
  });

} 

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};

MatchGame.generateCardValues();
MatchGame.renderCards();