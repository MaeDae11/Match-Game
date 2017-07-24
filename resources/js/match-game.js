var MatchGame = {};
var $BOX = $('.box-row-1');
var $CARD_INFO = $('.card-info')
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
  $CARD_INFO.each( function (i){
    $(this).text(cardValues[i]);
    colorBackground($(this), cardValues[i]);
  });
  
};

function colorBackground(box, value) {
    if (value === 1){
      box.css("background-color", "yellow")
    } else if (value === 2) {
      box.css("background-color", "blue")
    } else if (value === 3) {
      box.css("background-color", "pink")
    } else if (value === 4) { 
      box.css("background-color", "purple")
    } else if (value === 5) {
      box.css("background-color", "green")
    } else if (value === 6) {
      box.css("background-color", "lightgrey")
    } else if (value === 7) {
      box.css("background-color", "black")
    } 
  };



/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};

MatchGame.generateCardValues();










// var dataLayer = value.data('card');
//   if(!cardValues.indexOf(dataLayer)){
//     cardValues.push(dataLayer);
//     $('.card-info[data-card="'+ dataLayer + '"]').each(function(){
      
//     })