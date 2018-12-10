var cards = [];
var playerCards = [];
var dealerCards = [];
var playerPoints = [{ points: 0 }, { acePoints: 0 }];
var dealerPoints = [{ points: 0 }, { acePoints: 0 }];
let pPoint = playerPoints[0].points;
let dPoint = dealerPoints[0].points;
var symbols = ['C', 'D', 'S', 'H'];
var num = 0;

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var lblPlayerPoints = document.getElementById('player-points');
var lblDealerPoints = document.getElementById('dealer-points');
var buttonHit = document.getElementById('hit-button');
var buttonDeal = document.getElementById('deal-button');
var playerhand = document.getElementById('player-hand');
var dealerhand = document.getElementById('dealer-hand');
var messages = document.getElementById('messages');


// creating new cards
const createNewDeck = () => {
    for (var s of symbols) {
        for (var i = 1; i < 14; i++) {
            cards.push(i.toString() + s)
        }
    }
};

createNewDeck();

// get who is playing
const whoseCards = who => {
    if (who === 'dealer') {
        return dealerCards;
    } else {
        return playerCards;
    }
};

// generating random number
const generateRandomNum = () => {
    num = Math.floor(Math.random() * 13) + 1;
    let symbol = Math.floor(Math.random() * 4);
    let cardNo = num.toString() + symbols[symbol];
    return cardNo
}

// add points
const addPoint = who => {
    let myPoints;
    myPoints = ((who === 'dealer') ? dealerPoints : playerPoints);

    if (num === 1) {
        myPoints[1].acePoints += 10;
        myPoints[0].points += 11
    } else if (num > 10) {
        myPoints[0].points += 10
    } else {
        myPoints[0].points += num
    }
}

// generating random number
const imgNumber = who => {
    let myCard = generateRandomNum();
    let cardsPlaying = whoseCards(who);

    // if already chosen, get random number again
    while (cardsPlaying.includes(myCard)) {
        myCard = generateRandomNum();
    }

    cards.pop(myCard)
    addPoint(who)
    cardsPlaying[myCard] = ((num === 1) ? 11 : num);
    return myCard
};


const checkPoint = () => {
    pPoint = playerPoints[0].points;
    dPoint = dealerPoints[0].points;

    if (pPoint > 21) {
        return 'Player Lost'
    } else if (pPoint === 21){
        return 'Player won'
    } else{
        return false
    }
}


var blnUsedAce = false;

const winner = () => {
//    let msg = "";
    pPoint = playerPoints[0].points;
    dPoint = dealerPoints[0].points;

    let pPointDiff = Math.abs(21 - pPoint);
    let dPointDiff = Math.abs(21 - dPoint);
    let pPointWithoutAce = pPoint - 10;
    let pPointWithoutAceDiff = Math.abs(21 - pPoint);

    if ((pPoint === 21) ||
        (pPoint < 21 && dPoint > 21) ||
        (pPointDiff <= dPointDiff)) {
        return 'player'
    } else {
        if ((pPointWithoutAce === 21) ||
            (pPointWithoutAce < 21 && dPoint > 21) ||
            (pPointWithoutAceDiff <= dPointDiff)){
            blnUsedAce = true;
            return 'player'
            }
        return 'dealer'
    }
}


const deck = () => {
    //dealer deck
    img1.setAttribute('src', "imgs/" + imgNumber('dealer') + ".jpg");
    img2.setAttribute('src', "imgs/" + imgNumber('dealer') + ".jpg");
    lblDealerPoints.textContent = dealerPoints[0].points;

    //player deck
    img3.setAttribute('src', "imgs/" + imgNumber('player') + ".jpg");
    img4.setAttribute('src', "imgs/" + imgNumber('player') + ".jpg");
    lblPlayerPoints.textContent = playerPoints[0].points;

    buttonDeal.classList.toggle('hide');
    if (playerPoints[0].points === 21){
        messages.textContent = "Player won."

    } else if (dealerPoints[0].points === 21){
        messages.textContent = "Dealer won."
    } 
}

const hit = () => {
    if (Object.keys(playerCards).length > 0) {
        let addCard = "imgs/" + imgNumber('player') + ".jpg";
        // let child = createImg().setAttribute('src', addCard)
        var newImg = document.createElement('img')
        newImg.setAttribute('alt', '');
        newImg.setAttribute('src', addCard)
        playerhand.appendChild(newImg);
        addPoint('player');
    } else {
        alert("Please click 'Deal' first to play")
    }
    lblPlayerPoints.textContent = playerPoints[0].points;
    // var msg = ;
    if (checkPoint()){
        // console.log(message)
        messages.textContent = checkPoint();
    }

}

const stand = () => {
    if (Object.keys(dealerCards).length > 0) {
        let addCard = "imgs/" + imgNumber('player') + ".jpg";
        // let child = createImg().setAttribute('src', addCard)
        var newImg = document.createElement('img')
        newImg.setAttribute('alt', '');
        newImg.setAttribute('src', addCard)
        dealerhand.appendChild(newImg);
        addPoint('dealer');
    } else {
        alert("Please click 'Deal' first to play")
    }
    lblDealerPoints.textContent = dealerPoints[0].points;
    buttonHit.disabled = true;
    if (winner() === 'player'){
        messages.textContent = 'Player won!';
        if (blnUsedAce === true){
            lblPlayerPoints .textContent = playerPoints[0].points - 10;
        }
    } else {
        messages.textContent = 'Dealer won.'
    }
}

    // ============= jQuery ========
    // $('#deal-button').click(function(e){
    //     // change 2 images of dealer hand    
    //     $('#img1').attr('src', "imgs/"+imgNumber('dealer')+".jpg");
    //     $('#img2').attr('src', "imgs/"+imgNumber('dealer')+".jpg");
    //     $('#dealer-points').text(dealerPoints);

    //     // // change 2 images of player hand
    //     $('#img3').attr('src', "imgs/"+imgNumber('player')+".jpg");
    //     $('#img4').attr('src', "imgs/"+imgNumber('player')+".jpg");
    //     $('#player-points').text(playerPoints);
    //     $('#deal-button').toggleClass('hide');
    // });

    // $('#hit-button').click(function(e){
    //     // add images of dealer hand    
    //     if (Object.keys(playerCards).length > 0){
    //         var addCard = "imgs/"+imgNumber('player')+".jpg";
    //         $('#player-hand').append("<img alt='' src ='"+addCard+"'>")
    //     } else{
    //         alert("Please click 'Deal' first to play")
    //     }
    //     $('#player-points').text(playerPoints);
    // });
