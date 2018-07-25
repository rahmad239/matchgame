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

// create variable to id the cards in play
var cardOne = cards[0];
var cardTwo = cards[1];
//push the value in
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
// check what was flipped
console.log('User Flipped' + ' ' + cardOne);
console.log('User Flipped' + ' ' + cardTwo);

if (cardsInPlay.length === 2) {
  console.log('two cards are in play');
} else if (cardsInPlay[0] === cardsInPlay[1]) {
  alert('You have a match!');
} else {
  alert('Try again!');
}
