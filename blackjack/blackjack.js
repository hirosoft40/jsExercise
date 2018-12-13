
var cards = [];
var playerCards = [];
var dealerCards = [];
var playerPoints = [{ points: 0 }, { acePoints: 0 },{suitFlag:false}];
var dealerPoints = [{ points: 0 }, { acePoints: 0 },{suitFlag:false}];
var symbols = ['C', 'D', 'S', 'H'];
var num = 0;

let pPoint, dPoint;

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var lblPlayerPoints = document.getElementById('player-points');
var lblDealerPoints = document.getElementById('dealer-points');

var buttonHit = document.getElementById('hit-button');
var buttonDeal = document.getElementById('deal-button');
var buttonStand = document.getElementById('stand-button');
var buttonPlayAgain = document.getElementById('playAgain');
buttonPlayAgain.classList.add('hide');
buttonStand.disabled = true;
buttonHit.disabled = true;
var playerhand = document.getElementById('player-hand');
var dealerhand = document.getElementById('dealer-hand');
var messages = document.getElementById('messages');


const startGame = () => {
    cards = [];
    playerCards = [];
    dealerCards = [];
    playerPoints = [{ points: 0 }, { acePoints: 0 },{suitFlag:false}];
    dealerPoints = [{ points: 0 }, { acePoints: 0 },{suitFlag:false}];
    messages.textContent = '';
    lblPlayerPoints.textContent = '';
    lblDealerPoints.textContent = '';
    blnPlayerUsedAce = false;
    blnDealerUsedAce = false;
    img1.parentNode.classList.remove('winHand');
    img3.parentNode.classList.remove('winHand');
    num = 0;

    var allImgs = document.getElementsByTagName('img');
    for (var i=0; i<allImgs.length;i++){ 
            allImgs[i].removeAttribute('src');
    }

    var allNewImags = document.getElementsByClassName('newImages');
    if (allNewImags.length > 0){
        for (var i =allNewImags.length-1; i>=0; i--){
            let child = allNewImags[i];
            allNewImags[i].parentNode.removeChild(child);
            }
        }
    buttonPlayAgain.classList.add('hide');
    buttonDeal.classList.remove('hide');
    buttonHit.disabled = false;
    buttonStand.disabled = false;

}

// creating new cards
const createNewDeck = () => {
    for (var s of symbols) {
        for (var i = 1; i < 14; i++) {
            cards.push(i.toString() + s)
        }
    }
};
createNewDeck();


// decide whose turn
const whoseCard = who => {
    myCards = (who === 'dealer'? dealerCards: playerCards);
    myPoints = (who === 'dealer' ? dealerPoints : playerPoints);
    myHand = (who === 'dealer'? dealerhand: playerhand);
}


// generating random number
const generateRandomNum = () => {
    num = Math.floor(Math.random() * 13) + 1;
    let symbol = Math.floor(Math.random() * 4);
    let cardNo = num.toString() + symbols[symbol];
    return cardNo
}


// ==== generating random number and return path of the image
const imgNumber = who => {
    let cardNo = generateRandomNum();
    whoseCard(who)

    // if already chosen, get random number again
    while (myCards.includes(cardNo)) {
        cardNo = generateRandomNum();
    }
    cards.pop(cardNo)  // remove chosen card from allCard
    addPoint(who)
    myCards.push(cardNo)

    return "imgs/" + cardNo+ ".jpg" // images path
};


// ==== displayPoints
const displayPoints = () => {
    lblDealerPoints.textContent = dealerPoints[0].points;
    lblPlayerPoints.textContent = playerPoints[0].points;
}

// display message for win/lost
const displayMessage = status => {
    messages.textContent = 'Player '+ status;
    if (status.includes('Lost')){
        img1.parentNode.classList.add('winHand')
    } else if (status.includes('Tie')){
        img1.parentNode.classList.add('winHand')
        img3.parentNode.classList.add('winHand');
    } else{
        img3.parentNode.classList.add('winHand');
    }
    buttonPlayAgain.classList.remove('hide');
    buttonHit.disabled = true;
    buttonStand.disabled = true;
};

// ==== load Additional card from hit/stand
const loadNewCard = who => {
    whoseCard(who);
    let newImg = document.createElement('img')
    newImg.setAttribute('alt', '');
    newImg.setAttribute('src', imgNumber(who));
    newImg.setAttribute('class', 'newImages');
    myHand.appendChild(newImg);
};


// ==== load deck
const deck = () => {
    //dealer deck
    img1.setAttribute('src', imgNumber('dealer'));
    img2.setAttribute('src', imgNumber('dealer'));
 
    //player deck
    img3.setAttribute('src', imgNumber('player'));
    img4.setAttribute('src', imgNumber('player'));

    displayPoints();
    buttonDeal.classList.add('hide');
    buttonHit.disabled = false;
    buttonStand.disabled = false;

    whoWon("deck")
}

// ==== hit button
const hit = () => {
    loadNewCard('player')
    displayPoints();
    whoWon('hit');
};

// === stand button
const stand = () => {
    // loadNewCard('dealer');
    loadNewCard('dealer')
    displayPoints();    

    if (dealerPoints[0].points >= 17) whoWon('stand');  
}


// add points
const addPoint = (who) => {
    whoseCard(who)
    if (num === 1) {
        myPoints[1].acePoints += 10;
        myPoints[0].points += 11;
    } else if (num > 10) {
        myPoints[0].points += 10;
        myPoints[2].suitFlag = true;
    } else {
        myPoints[0].points += num;
    }
}

var blnPlayerUsedAce = false;
var blnDealerUsedAce = false;

const whoWon = (where) => {
    pPoint = playerPoints[0].points;
    dPoint = dealerPoints[0].points;

    console.log('p', num, pPoint, playerPoints[1].acePoints)
    console.log('d', num, dPoint, dealerPoints[1].acePoints)

    if (pPoint === dPoint){
        return displayMessage("Tie");
        // player BlackJack
    } else if (playerCards.length == 2){
        if (playerPoints[2].suitFlag && playerPoints[1].acePoints>0){
            return displayMessage('Won with Blackjack');
        // when double ace at first deal
        } else if (playerPoints[1].acePoints == 20){
            playerPoints[0].points -= 10;
            playerPoints[1].acePoints = 10;
            return false;
        }
      // dealer blackjack  
    } else if (dealerCards.length == 2){
        if(dealerPoints[2].suitFlag && dealerPoints[1].acePoints>0){
            return displayMessage("Lost with Dealer's Blackjack");
            // when double ace at first deal
        } else if (dealerPoints[1].acePoints == 20){
            dealerPoints[0].points -= 10;
            dealerPoints[1].acePoints = 10;
            return false;
        }
    // instant win 
    }else if (pPoint === 21){
        return displayMessage("Won");
    } else if (dPoint === 21){
        return displayMessage("Lost");
    };
    
    if (where === 'deck' || where == 'hit'){
        if (pPoint<21 && dPoint< 17){
            return false
        } else if (pPoint<21 && dPoint >= 17) {
            if  (Math.abs(21 - pPoint) < Math.abs(21 - dPoint)){
                return displayMessage("Won");
            } else {
                return displayMessage("Lost");
            }
        } else if ((playerPoints[1].acePoints > 0) && (pPoint - 10 < 21)){
            playerPoints[0].points -= 10;
            playerPoints[1].acePoints = 0;
            displayPoints();
            return false
        } else{
            return displayMessage("Lost. Busted!")
        }
    } else {
        if ((pPoint < 21 && dPoint < 21) &&
            (Math.abs(21 - pPoint) < Math.abs(21 - dPoint))){
            return displayMessage("Won");
        } else if((dPoint>21) && (dealerPoints[1].acePoints > 0) && (dPoint - 10 < 21)){
            dealerPoints[0].points -= 10;
            dealerPoints[1].acePoints = 0;
            displayPoints(); 
            return false;
        } else{
            return displayMessage("Won")
        }
    }
}
