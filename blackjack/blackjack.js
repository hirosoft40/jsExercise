
var cards = [];
var playerCards = [];
var dealerCards = [];
var playerPoints = [{ points: 0 }, { acePoints: 0 }];
var dealerPoints = [{ points: 0 }, { acePoints: 0 }];
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

var playerhand = document.getElementById('player-hand');
var dealerhand = document.getElementById('dealer-hand');
var messages = document.getElementById('messages');


const startGame = () => {
    cards = [];
    playerCards = [];
    dealerCards = [];
    playerPoints = [{ points: 0 }, { acePoints: 0 }];
    dealerPoints = [{ points: 0 }, { acePoints: 0 }];
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

    if (buttonHit.disabled){ buttonHit.disabled = false};
    if (buttonStand.disabled){ buttonStand.disabled = false};

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
        myPoints[0].points += 11;
    } else if (num > 10) {
        myPoints[0].points += 10;
    } else {
        myPoints[0].points += num;

    }
}

// generating random number
const imgNumber = who => {
    let myCard = generateRandomNum();
    let cardsPlaying = ((who === 'dealer') ? dealerCards : playerCards);

    // if already chosen, get random number again
    while (cardsPlaying.includes(myCard)) {
        myCard = generateRandomNum();
    }

    cards.pop(myCard)  // remove chosen card from allCard
    let myPoint = addPoint(who)
    cardsPlaying[myCard] = myPoint; 
    return myCard
};

// check who won
const checkPoint = () => {
    pPoint = playerPoints[0].points;

    if (pPoint > 21) {
        // when player has ace
        if(playerPoints[1].acePoints > 0){
            if (pPoint-10 === 21){
                return 'player won';
            } else  if(pPoint-10 < 21){
                console.log('hehe')
//                playerPoints[0].points = pPoint - 10;
                return false;
            } 
        }
        return 'Burst. Player Lost'
    } else if (pPoint === 21){
        return 'Player won'
    } else{
        return false
    }
}

const checkBlackJack = () => {

}


var blnPlayerUsedAce = false;
var blnDealerUsedAce = false;

const winner = () => {

    pPoint = playerPoints[0].points;
    dPoint = dealerPoints[0].points;

    let pPointDiff = Math.abs(21 - pPoint);
    let dPointDiff = Math.abs(21 - dPoint);
    let pPointWithoutAce = pPoint - 10;
    let dPointWithoutAce = dPoint - 10;
    let pPointWithoutAceDiff = Math.abs(21 - pPoint);
    let dPointWithoutAceDiff = Math.abs(21 - dPoint);
    // console.log('d', dPoint, dPointDiff, dPointWithoutAceDiff)
    // console.log('p', pPoint, pPointDiff, pPointWithoutAceDiff)


    if ((pPoint === 21) || 
        (pPoint < 21 && dPoint > 21) ||
        (pPointDiff <= dPointDiff)){
            // if ((dPointWithoutAceDiff < 21 && dPointDiff) && 
            // (dPointWithoutAce < 21 && pPoint > 21) ||
            // (dPointWithoutAceDiff <= pPointDiff)){
            //     blnDealerUsedAce = true;
            //     return 'dealer'
            // }           
        return 'player'
    } else {
        if ((pPointWithoutAce === 21) ||
            (pPointWithoutAce < 21 && dPoint > 21) ||
            (pPointWithoutAceDiff <= dPointDiff)){
                blnPlayerUsedAce = true;
                return 'player'
            }
        return 'dealer'
    }
}


// buttonSetting for result
const buttonSetting = () => {
    buttonPlayAgain.classList.remove('hide');
    buttonHit.disabled = true;
    buttonStand.disabled = true;
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
    
    buttonDeal.classList.add('hide');

    // if dealer or player get 21
    if (playerPoints[0].points === 21){
        messages.textContent = "Player won.";
        img3.parentNode.classList.add('winHand');
        buttonSetting();

    } else if (dealerPoints[0].points === 21){
        messages.textContent = "Player Lost.";
        img1.parentNode.classList.add('winHand');
        buttonSetting();
    } 
}

const hit = () => {
    if (Object.keys(playerCards).length > 0) {
        let addCard = "imgs/" + imgNumber('player') + ".jpg";
        var newImg = document.createElement('img')
        newImg.setAttribute('alt', '');
        newImg.setAttribute('src', addCard)
        newImg.setAttribute('class', 'newImages')
        playerhand.appendChild(newImg);

    } else {
        alert("Please click 'Deal' first to play")
        return
    }
    lblPlayerPoints.textContent = playerPoints[0].points;
    let winner = checkPoint();
    if (winner){
        messages.textContent = winner;
        console.log(winner.includes('won'))
        if (winner.includes('won')){
            img3.parentNode.classList.add('winHand');
        } else {
            img1.parentNode.classList.add('winHand');
        }
        buttonSetting();
    }
}

const stand = () => {
    if (Object.keys(dealerCards).length > 0) {
        let addCard = "imgs/" + imgNumber('player') + ".jpg";
        // let child = createImg().setAttribute('src', addCard)
        var newImg = document.createElement('img')
        newImg.setAttribute('alt', '');
        newImg.setAttribute('src', addCard)
        newImg.setAttribute('class', 'newImages')
        dealerhand.appendChild(newImg);
        addPoint('dealer');

    } else {
        alert("Please click 'Deal' first to play")
        return
    }
    lblDealerPoints.textContent = dealerPoints[0].points;
    buttonHit.disabled = true;

    if (winner() === 'player'){
        messages.textContent = 'Player won!';
        img3.parentNode.classList.add('winHand');
        buttonSetting();
        if (blnPlayerUsedAce === true){
            lblPlayerPoints .textContent = playerPoints[0].points - 10;
        }
    } else {
        messages.textContent = 'Dealer won.'
        img1.parentNode.classList.add('winHand');
        if (blnPlayerUsedAce === true){
            lblPlayerPoints .textContent = playerPoints[0].points - 10;
        }
        buttonSetting();
        if (blnDealerUsedAce === true){
            lblDealerPoints .textContent = dealerPoints[0].points - 10;
        }

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
    //         return
    //     }
    //     $('#player-points').text(playerPoints);
    // });
