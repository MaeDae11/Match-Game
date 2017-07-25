var MatchGame = {};
var $BOX = $('.box-row-1');
var $game = []
var cardFlipped = false;
var data = []
var attributes;
// var $myData = $(".card-numbers");
/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

//  generates random numbers from two sets of values ranged 1-8. this created the "pair" effect - the final array has two 1s, two 2s, etc. and in random order
function generateCardValues() {
  var matchOne = [8, 7, 6, 5, 4, 3, 2 , 1];
  var matchTwo = [8, 7, 6, 5, 4, 3, 2 , 1];
  var concatMatch = matchOne.concat(matchTwo);
  var randomArray = shuffleArray(concatMatch);
  return randomArray;
};

// shuffles the array so in random order
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

// did nothing
// renders cards to get 
// function renderCards(cardValues) {
//   var newArray = giveCardValue(cardValues);
// };
function setNumberValue(box, value){
  box.attr("data-number", value)
}
function colorBackground(box, value) {
  $.each(box, function (i){
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
    } else if (value === 8) {
      box.css("background-color", "orange")
    }
  });
  return value;
};
  // loops through eachbox and uses .text to assign one of the numberes in the random array.
  // based on those values, the background color is set so 1 and 1 have the same color. etc,
function giveCardValue(cardValues){
  $BOX.each( function (i){
    $(this).text(cardValues[i]);
    var value = colorBackground($(this), cardValues[i])
    setNumberValue($(this), cardValues[i]);
    // $(this).addClass(".box-row-show");
    // $(this).toggle(".box-row-show");
  });
};


// takes $BOX which is $('.box-row-1'); and loops through each box's value to find what background color should do.

// function cardFlip(){
  

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

//  when card is fliped, etc.
function detectCardFlip(){
  $BOX.on('click', function (){
    event.preventDefault();
    $(this).data('number', 'disabled')
    // cardFlipped = true;
    //class change
    // .show()
  });
}



MatchGame.flipCard = function($card, $game) {
  

};



function restartGame(){
    $('[data-type-button="submit"]').on('click', function (){
        event.preventDefault();
        var array = generateCardValues();
        giveCardValue(array);
    });
};



detectCardFlip();
restartGame();


// var dataLayer = value.data('card');
//   if(!cardValues.indexOf(dataLayer)){
//     cardValues.push(dataLayer);
//     $('.card-info[data-card="'+ dataLayer + '"]').each(function(){
      
//     })