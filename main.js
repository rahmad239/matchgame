// creating an array to store values of cards
var cards = [
  {
    couple: 'smith',
    role: 'wife',
    cardImage: 'card_images/jadaSmith.jpeg'
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

// create a function called 'flipCard
var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);
  console.log('You flipped half of the ' + cards[cardId].couple + ' pair.');
  cardsInPlay.push(cards[cardId].couple);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].role);
  checkForTwo();
};

// check for two. sets the if statement to
// condition of having two cards
var checkForTwo = function() {
  if (cardsInPlay.length === 1) {
    alert('Please select a second card!');
  } else {
    console.log('Two cards are in play');
    checkForMatch();
  }
};

// check for the match
var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
  } else {
    alert('Sorry, try again.');
  }
};

//play with the placement of the statments above to get the alerts to fire in the order you prefer

//create a function to make the board
var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'card_images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};
createBoard();
