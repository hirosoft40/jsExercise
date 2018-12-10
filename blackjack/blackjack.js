    var cards = [];
    var playerCards =[];
    var dealerCards=[];
    var playerPoints = 0;
    var dealerPoints = 0;
    var playerAce = 0;
    var dealerAce = 0;
    var symbols = ['C','D','S','H'];

    // creating new cards
    function createNewDeck(){
        for (var s of symbols){
            for (var i=1;i<14; i++){
                cards.push(i.toString()+s) 
            }
        }
    };

    createNewDeck();

    const whoIsPlaying = who => {
        if (who ==='dealer'){
            return dealerCards;
        } else {
            return playerCards;
        }
    };

    // generating rundom number
    const imgNumber = who => {
        let num = Math.floor(Math.random() * 13)+1;
        let symbol = Math.floor(Math.random() * 4);
        let myCard = num.toString()+symbols[symbol]
        let cardsPlaying = whoIsPlaying(who);

        // if already chosen, get random number again
        while (cardsPlaying.includes(myCard)){
            num = Math.floor(Math.random() * 13)+1;
            symbol = Math.floor(Math.random() * 4);
            myCard = num.toString()+symbols[symbol]
            }
        cards.pop(myCard)
        
        // Ace point
        if (num === 1) playerAce+=10

        // add points
        if (num>10){
            cardsPlaying[myCard] = 10;
            console.log(cardsPlaying)
            if (who === 'dealer'){
                dealerPoints += 10;
            } else{
                playerPoints += 10;
            }
        }else{
            cardsPlaying[myCard] = num;
            if (who === 'dealer'){
                dealerPoints += num;
            } else{
                playerPoints += num;
            }        
        };
        return myCard    
    };

    //＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    // やること
    // ① Standボタン機能をつける。StandしたらDealerだけカード引ける。Standした時点で２１点超えてたら負け。　＝＞フラグつける？
    // ② 点数計算。

    const winner = () => {
        let msg = "";
        //check if player has Ace 
        // if player has Ace, if points + 10 <21 then dont decide.
        // only when player decided to hold, you decide if its 21
        //dealer won 
        if (playerPoints > 21 && playerPoints > dealerPoints){
            return "Player Lost";        
        } else if ((playerPoints > 21 && playerPoints == dealerPoints) || 
                    (dealerPoints > 21 && dealerPoints > playerPoints))
                    { 
            return "Player won";        
        }
    }

    $('#deal-button').click(function(e){
        // change 2 images of dealer hand    
        $('#img1').attr('src', "imgs/"+imgNumber('dealer')+".jpg");
        $('#img2').attr('src', "imgs/"+imgNumber('dealer')+".jpg");
        $('#dealer-points').text(dealerPoints);

        // // change 2 images of player hand
        $('#img3').attr('src', "imgs/"+imgNumber('player')+".jpg");
        $('#img4').attr('src', "imgs/"+imgNumber('player')+".jpg");
        $('#player-points').text(playerPoints);
        $('#deal-button').toggleClass('hide');
    });

    $('#hit-button').click(function(e){
        // add images of dealer hand    
        if (Object.keys(playerCards).length > 0){
            var addCard = "imgs/"+imgNumber('player')+".jpg";
            $('#player-hand').append("<img alt='' src ='"+addCard+"'>")
        } else{
            alert("Please click 'Deal' first to play")
        }
        $('#player-points').text(playerPoints);

    });
