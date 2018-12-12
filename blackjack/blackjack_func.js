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
