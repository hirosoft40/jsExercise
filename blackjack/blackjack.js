var cards = [];
var playerCards = [];
var dealerCards = [];
var playerPoints = [{ points: 0 }, { acePoints: 0 },{suitFlag:false}];
var dealerPoints = [{ points: 0 }, { acePoints: 0 },{suitFlag:false}];
var symbols = ['C', 'D', 'S', 'H'];

var pPoint, dPoint, myCards, myHand, myLabel,myPoints, holeCard, num;

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
    img1.parentNode.classList.remove('winHand');
    img3.parentNode.classList.remove('winHand');
    buttonPlayAgain.classList.add('hide');
    buttonDeal.classList.remove('hide');
    buttonHit.disabled = false;
    buttonStand.disabled = false;
    num = 0;

    lblPlayerPoints.textContent = '';
    lblDealerPoints.textContent = '';

    var allImgs = document.getElementsByTagName('img');
    for (var i=0; i<allImgs.length;i++){ 
            allImgs[i].src = '';
    }

    var allNewImags = document.getElementsByClassName('newImages');
    if (allNewImags.length > 0){
        for (var i =allNewImags.length-1; i>=0; i--){
            let child = allNewImags[i];
            allNewImags[i].parentNode.removeChild(child);
            }
        }
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
    myLabel = (who === 'dealer'? lblDealerPoints: lblPlayerPoints);
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
const displayPoints = (where) => {
    if (where != 'deck'){
        lblDealerPoints.textContent = dealerPoints[0].points;
        lblPlayerPoints.textContent = playerPoints[0].points;    
    } else {
        lblDealerPoints.textContent = "Hidden";
        lblPlayerPoints.textContent = playerPoints[0].points;    
    }
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
    holeCard = imgNumber('dealer');
    img1.src = "imgs/blue_back.jpg"
    document.getElementById('img2').src = imgNumber('dealer')
 
    //player deck
    img3.src = imgNumber('player')
    img4.src = imgNumber('player')

    displayPoints('deck');
    buttonDeal.classList.add('hide');
    buttonHit.disabled = false;
    buttonStand.disabled = false;

    whoWon("deck")
}

// ==== hit button
const hit = () => {
    loadNewCard('player')
    img1.src = holeCard;
    displayPoints('hit');
    whoWon('hit');
};

// === stand button
const stand = () => {
    img1.src = holeCard;
    buttonHit.disabled = true;
    loadNewCard('dealer')
    displayPoints('stand');    
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

const checkPointDiff = (pPoint, dPoint)=>{
    let pPointDiff = Math.abs(21 - pPoint);
    let dPointDiff = Math.abs(21 - dPoint);
    if (pPointDiff == dPointDiff){
        return displayMessage("Tie")
    } else if (pPointDiff < dPointDiff){
        return displayMessage("Won")
    } else {
        return displayMessage("Lost");
    }
}

const useAcePoint = (who) => {
    whoseCard(who);
    myPoints[0].points -= 10;
    myPoints[1].acePoints = 10;
    myLabel.textContent = myPoints[0].points ;
}

const checkBlackJack = () =>{
    if (dealerCards.length ==2 && dealerPoints[2].suitFlag && dealerPoints[1].acePoints>0){
        img1.src = holeCard;
        lblDealerPoints.textContent = dealerPoints[0].points;
        displayMessage("Lost with Dealer's Blackjack");   
        return true   
    } else if (playerCards.length ==2 && playerPoints[2].suitFlag && playerPoints[1].acePoints>0){
        img1.src = holeCard;
        lblDealerPoints.textContent = dealerPoints[0].points;
        displayMessage('Won with Blackjack');
        return true 
    } else {
        return false;
    }
};

const whoWon = (where) => {
    whoseCard("player");
    pPoint = myPoints[0].points;
    dPoint = dealerPoints[0].points;

    if(checkBlackJack()){
        return true
    } else if (dPoint === 21 && pPoint === 21){    // both 21
        img1.src = holeCard;
        return displayMessage('Tie');
    } else if (dPoint === 21 && pPoint !== 21){ //dealer is 21
        img1.src = holeCard;
        return displayMessage('Lost');        
    } else if (dPoint !== 21 && pPoint === 21){ // player is 21
        img1.src = holeCard;
        return displayMessage('Won');   
    };    
    
    if (where === 'deck'){
        if(myPoints[1].acePoints == 20){   //if plyaers has 2 Aces on first deal
            useAcePoint('player')
            return false;
        } else if(dealerPoints[1].acePoints ==20){ //if dealer has 2 Aces on first deal
            useAcePoint('dealer')
            return false;        
        } 
    } else if (where === 'hit'){
        if(pPoint<21 && dPoint< 17){    // can continue
            return false
        } else if (pPoint<21 && dPoint >= 17) {  // check depending on point
            checkPointDiff(pPoint, dPoint);
        // Ace 
        }else if (pPoint>21 && (playerPoints[1].acePoints > 0) && (pPoint - 10 < 21)){  //Ace
            useAcePoint('player')
            displayPoints('hit');
            return false
        } else{
            return displayMessage("Lost. Busted!")
        }
    } else if (where == 'stand'){
        if (dPoint < 17){
            return false;
        } else if (dPoint>21){
            return displayMessage("Win");
        } else if(pPoint < 21 && dPoint < 21){
            checkPointDiff(pPoint, dPoint);
        } else if((dPoint>21) && (dealerPoints[1].acePoints > 0) && (dPoint - 10 < 21)){
            useAcePoint('dealer')
            displayPoints('stand'); 
            return false;
        }else{
            return displayMessage("Lost");
        }
    }
}