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
  {
    couple: 'smith',
    role: 'wife',
    cardImage: 'card_image/jadaSmith.jpeg'
  },
  {
    couple: 'smith',
    role: 'husband',
    cardImage: 'card_images/willSmith.jpeg'
  },
  {
    couple: 'obama',
    role: 'wife',
    cardImage: 'card_images/michelleO.jpeg'
  },
  {
    couple: 'obama',
    role: 'husband',
    cardImage: 'card_images/barak.jpg'
  },
  {
    couple: 'hicks',
    role: 'wife',
    cardImage: 'card_images/abrahamHicks.jpeg'
  },
  {
    couple: 'hicks',
    role: 'husband',
    cardImage: 'card_images/jerry.jpeg'
  },
  {
    couple: 'gaines',
    role: 'wife',
    cardImage: 'card_images/joannagaines.jpeg'
  },
  {
    couple: 'gaines',
    role: 'husband',
    cardImage: 'card_images/chipgaines.jpeg'
  },
  {
    couple: 'gossling',
    role: 'wife',
    cardImage: 'card_images/evamendes.jpeg'
  },
  {
    couple: 'gossling',
    role: 'husband',
    cardImage: 'card_images/ryangossling.jpeg'
  }
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
  cardsInPlay.push(cards[cardId].couple);
  console.log('You flipped half of the ' + cards[cardId].couple + ' pair.');
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].role);
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

//play with the placement of the statments above to get the alerts to fire in the order you prefer
