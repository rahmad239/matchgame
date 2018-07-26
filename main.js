// creating a variable to test names
// var cardOne = 'smith';
// var cardTwo = 'smith';
// var cardThree = 'obama';
// var cardFour = 'obama';
// var cardFive = 'hicks';
// var cardSix = 'hicks';
// var cardSeven = 'gaines';
// var cardEight = 'gaines';
// var cardNine = 'gossling';
// var cardTen = 'gossling';
// console.log('User Flipped' + ' ' + cardEight);
// console.log('User Flipped' + ' ' + cardFive);

// creating an array to store values of cards
var cards = [
  'smith',
  'smith',
  'obama',
  'obama',
  'hicks',
  'hicks',
  'gaines',
  'gaines',
  'gossling',
  'gossling'
];

//empty array to hold values of wht is in play
var cardsInPlay = [];

// check for the match
var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
  } else {
    alert('Sorry, try again.');
  }
};
// create a function called 'flipCard
var flipCard = function(cardId) {
  cardsInPlay.push(cards[cardId]);
  console.log('You flipped half of the ' + cards[cardId] + ' pair.');
  // sets the if statement to condition of having two cards
  if (cardsInPlay.length === 2) {
    console.log('Two cards are in play');
  } else {
    alert('Please select a second card!');
  }
};
flipCard(0);
flipCard(2);
checkForMatch();
