// * * * * * * * * * * * * * * * * * * * * * * * * * * * * Card Pack  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
var deck = [{
    path: "2_of_clubs.png",
    value: 2
}, {
    path: "2_of_diamonds.png",
    value: 2
}, {
    path: "2_of_hearts.png",
    value: 2
}, {
    path: "2_of_spades.png",
    value: 2
}, {
    path: "3_of_clubs.png",
    value: 3
}, {
    path: "3_of_diamonds.png",
    value: 3
}, {
    path: "3_of_hearts.png",
    value: 3
}, {
    path: "3_of_spades.png",
    value: 3
}, {
    path: "4_of_clubs.png",
    value: 4
}, {
    path: "4_of_diamonds.png",
    value: 4
}, {
    path: "4_of_hearts.png",
    value: 4
}, {
    path: "4_of_spades.png",
    value: 4
}, {
    path: "5_of_clubs.png",
    value: 5
}, {
    path: "5_of_diamonds.png",
    value: 5
}, {
    path: "5_of_hearts.png",
    value: 5
}, {
    path: "5_of_spades.png",
    value: 5
}, {
    path: "6_of_clubs.png",
    value: 6
}, {
    path: "6_of_diamonds.png",
    value: 6
}, {
    path: "6_of_hearts.png",
    value: 6
}, {
    path: "6_of_spades.png",
    value: 6
}, {
    path: "7_of_clubs.png",
    value: 7
}, {
    path: "7_of_diamonds.png",
    value: 7
}, {
    path: "7_of_hearts.png",
    value: 7
}, {
    path: "7_of_spades.png",
    value: 7
}, {
    path: "8_of_clubs.png",
    value: 8
}, {
    path: "8_of_diamonds.png",
    value: 8
}, {
    path: "8_of_hearts.png",
    value: 8
}, {
    path: "8_of_spades.png",
    value: 8
}, {
    path: "9_of_clubs.png",
    value: 9
}, {
    path: "9_of_diamonds.png",
    value: 9
}, {
    path: "9_of_hearts.png",
    value: 9
}, {
    path: "9_of_spades.png",
    value: 9
}, {
    path: "10_of_clubs.png",
    value: 10
}, {
    path: "10_of_diamonds.png",
    value: 10
}, {
    path: "10_of_hearts.png",
    value: 10
}, {
    path: "10_of_spades.png",
    value: 10
}, {
    path: "ace_of_clubs.png",
    value: 11
}, {
    path: "ace_of_diamonds.png",
    value: 11
}, {
    path: "ace_of_hearts.png",
    value: 11
}, {
    path: "ace_of_spades.png",
    value: 11
}, {
    path: "jack_of_clubs2.png",
    value: 10
}, {
    path: "jack_of_diamonds2.png",
    value: 10
}, {
    path: "jack_of_hearts2.png",
    value: 10
}, {
    path: "jack_of_spades2.png",
    value: 10
}, {
    path: "king_of_clubs2.png",
    value: 10
}, {
    path: "king_of_diamonds2.png",
    value: 10
}, {
    path: "king_of_hearts2.png",
    value: 10
}, {
    path: "king_of_spades2.png",
    value: 10
}, {
    path: "queen_of_clubs2.png",
    value: 10
}, {
    path: "queen_of_diamonds2.png",
    value: 10
}, {
    path: "queen_of_hearts2.png",
    value: 10
}, {
    path: "queen_of_spades2.png",
    value: 10
}];
var basePathCards = "css/images/cards/";

var chips = [{
    path: "chip_1.png",
    value: 1
}, {
    path: "chip_5.png",
    value: 5
}, {
    path: "chip_10.png",
    value: 10
}, {
    path: "chip_50.png",
    value: 50
}, {
    path: "chip_100.png",
    value: 100
}];
var basePathChips = "css/images/chips/";
//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//* * * * * * * * * * * * * * * Game Starting Window * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
var userName,
    userBalance,
    userVictory = 0,
    dealerVictory = 0;


$(document).ready(function() {

    $("#userInfo").modal();

});

// * * * * * * * * * * * * * * * * * * * * * * *  * * * * * * * * * * * * * * * * * *  * *  * * * * * * * * * * *  * * * * * * * * * * * * * * * * *
//* * * * * * * * * * * * * * * * * * * * * * * * * * * Game Start  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


function shuffleCards() {
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}



function gameStart() {
    if (document.getElementById('idName').value != "" && document.getElementById('ageVerification').checked) {
        document.getElementById('userData').style.display = 'block';

        function setUserName() {
            userName = document.getElementById('idName').value;
            document.getElementById('currentUser').innerHTML = "<span class='glyphicon glyphicon-user'></span> " + userName + "";
        }
        setUserName();

        function serUserBalance() {
            userBalance = +document.getElementById('balanceSelect').value;
            document.getElementById('balance').innerHTML = "<span class='glyphicon glyphicon-piggy-bank'a></span> " + userBalance + "";
        }
        serUserBalance()

        if (userBalance > 0) {
            function dealChips() {
                document.getElementById('bettingChips').style.display = "block";

            }
            dealChips();
        } else {
            document.getElementById('score1').style.display = 'block';
            document.getElementById('score2').style.display = 'block';
            document.getElementById('idUserBalance').style.display = "none";
            document.getElementById('idUserName').style.bottom = "30px";
            document.getElementById('doubleButton').style.visibility = "hidden";
            document.getElementById('splitButton').style.visibility = "hidden";
        }

        $('#userInfo').modal('hide');
        document.getElementById("dealDisplay").style.display = 'block';
        document.getElementById('userFormModal').reset();

    } else {
        alert("Complete the Form and confirm your age to proceed!")
    }
}

document.getElementById('gameStart').addEventListener('click', gameStart);


//***********************************************************************
//**************************** Place Bet ********************************
var chipCount = 0;
document.getElementById('bet1').addEventListener('click', bet1);
document.getElementById('bet5').addEventListener('click', bet5);
document.getElementById('bet10').addEventListener('click', bet10);
document.getElementById('bet50').addEventListener('click', bet50);
document.getElementById('bet100').addEventListener('click', bet100);
var numberOfChips = 0,
    chipColumn = 450;

function nextColumn() {
    if (chipCount == 25) {
        chipCount = 0;
        chipColumn -= 50;
    }
}

function maxBet(result) {
    if (playerBet >= userBalance) {
        document.getElementById('bettingChips').style.display = "none";
        endOfGameNotifications(result);
    }
}

function bet1() {
    var chip = new Image();
    chip.setAttribute('class', 'chip');
    chip.setAttribute('id', 'chipId' + numberOfChips + '')
    chip.src = basePathChips + chips[0].path;
    chipId = "#chipId" + numberOfChips + "";
    document.getElementById("chipAppear").appendChild(chip);
    chipBet(200 + chipCount, chipColumn, chipId);
    chipCount += 5;
    playerBet += chips[0].value;

    numberOfChips++;
    nextColumn();

    var result = "Maximum bet reached!";
    maxBet(result);
}



function bet5() {
    var chip = new Image();
    chip.setAttribute('class', 'chip');
    chip.setAttribute('id', 'chipId' + numberOfChips + '')
    chip.src = basePathChips + chips[1].path;
    chipId = "#chipId" + numberOfChips + "";
    document.getElementById("chipAppear").appendChild(chip);
    chipBet(200 + chipCount, chipColumn, chipId);
    chipCount += 5;
    playerBet += chips[1].value;
    numberOfChips++;
    nextColumn();

    var result = "Maximum bet reached!";
    maxBet(result);

}

function bet10() {
    var chip = new Image();
    chip.setAttribute('class', 'chip');
    chip.setAttribute('id', 'chipId' + numberOfChips + '')
    chip.src = basePathChips + chips[2].path;
    chipId = "#chipId" + numberOfChips + "";
    document.getElementById("chipAppear").appendChild(chip);
    chipBet(200 + chipCount, chipColumn, chipId);
    chipCount += 5;
    playerBet += chips[2].value;
    numberOfChips++;
    nextColumn();
    var result = "Maximum bet reached!";
    maxBet(result);


}

function bet50() {
    var chip = new Image();
    chip.setAttribute('class', 'chip');
    chip.setAttribute('id', 'chipId' + numberOfChips + '')
    chip.src = basePathChips + chips[3].path;
    chipId = "#chipId" + numberOfChips + "";
    document.getElementById("chipAppear").appendChild(chip);
    chipBet(200 + chipCount, chipColumn, chipId);
    chipCount += 5;
    playerBet += chips[3].value;
    numberOfChips++;
    nextColumn();
    var result = "Maximum bet reached!";
    maxBet(result);
}

function bet100() {
    var chip = new Image();
    chip.setAttribute('class', 'chip');
    chip.setAttribute('id', 'chipId' + numberOfChips + '')
    chip.src = basePathChips + chips[4].path;
    chipId = "#chipId" + numberOfChips + "";
    document.getElementById("chipAppear").appendChild(chip);
    chipBet(200 + chipCount, chipColumn, chipId);
    chipCount += 5;
    playerBet += chips[4].value;
    numberOfChips++;
    nextColumn();
    var result = "Maximum bet reached!";
    maxBet(result);
}

function chipBet(chipPosition, chipColumn, chipId) {
    $(document).ready(function() {
        $(chipId).animate({
            right: chipColumn,
            bottom: chipPosition
        }, 1000);
    });


}


//* * * * * * * * * * *  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//* * * * * * * * * * * * * * * * * * * * * * * * * * * New Round * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
var playerCardsValue,
    dealerCardsValue,
    cardCount,
    playerHand = [],
    dealerHand = [],
    playerCardCount = 0,
    dealerCardCount = 0,
    playerBet = 0;




function createDealCard(cardPosition, cardPosition2) {
    var cardFace = document.createElement('img');
    cardFace.setAttribute('src', 'css/images/cards/card_back.png');
    cardFace.setAttribute('id', 'cardDeck');
    document.getElementById('playTable').appendChild(cardFace);
    $(document).ready(function() {

        $('#cardDeck').animate({
            left: cardPosition2,
            top: cardPosition
        }, 1000, function() {
            $('#cardDeck').remove();
        });

        var angle = 0;
        //        var rotation = setInterval(function() {
        //
        //            angle += 1;
        //
        //            $('#cardDeck').rotate(angle);
        //        }, 1);
        //       clearInterval(rotation, 2000)
    });

}

function startRound() {
    if (playerBet == 0 && userBalance > 0) {
        alert('Place your bet before continuing!')
    } else {
        var result = "";
        maxBet(result);
        shuffleCards();
        playerCardsValue = 0;
        dealerCardsValue = 0;
        document.getElementById('dealDisplay').style.display = 'none';
        setTimeout(function() {
            document.getElementById('playDisplay').style.display = 'block';
        }, 8400);


        function dealCards() {
            document.getElementById('bettingChips').style.display = "none";
            playerCardsValue = 0;
            dealerCardsValue = 0;
            cardCount = 0;
            var timeId = setInterval(cardss, 1700);
            setTimeout(function() {
                clearInterval(timeId);
            }, 6900);

            function cardss() {

                var image = new Image();
                image.setAttribute('class', 'card');
                image.src = basePathCards + deck[cardCount].path;


                if (cardCount <= 1) {
                    createDealCard(360, 525);
                    setTimeout(function() {
                        document.getElementById("userCards").appendChild(image);
                        playerHand.push(deck[cardCount].value);

                        for (; playerCardCount < playerHand.length; playerCardCount++) {
                            playerCardsValue += playerHand[playerCardCount];
                        }
                        if (playerCardsValue == 22) {
                            playerHand[1] = 1;
                            dealerCardsValue = 12;
                        }
                        document.getElementById("cardPoints").innerHTML = playerCardsValue;
                        cardCount++;
                    }, 1500);


                } else {
                    createDealCard(180, 525);
                    setTimeout(function() {
                        if (cardCount >= 3) {
                            image.src = basePathCards + 'card_back.png';
                        }
                        document.getElementById("dealerCards").appendChild(image);
                        dealerHand.push(deck[cardCount].value);
                        for (; dealerCardCount < dealerHand.length; dealerCardCount++) {
                            dealerCardsValue += dealerHand[dealerCardCount];
                        }
                        if (dealerCardsValue == 22) {
                            dealerHand[1] = 1;
                            dealerCardsValue = 12;
                        }
                        cardCount++;
                    }, 1500);

                }
            }


        }

        dealCards();
    }
}
//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  Player Moves * * * * * * * * * * * * * * * * * * * * * * * * * * * *


function stay() {
    document.getElementById('playDisplay').style.display = 'none';

    function flipCard() {
        var flippedCard = new Image();
        flippedCard.setAttribute('class', 'card');
        flippedCard.src = basePathCards + deck[3].path;
        var flip = document.getElementById('dealerCards');
        flip.removeChild(flip.lastChild);
        flip.appendChild(flippedCard);

    }
    flipCard()


    while (dealerCardsValue < playerCardsValue && dealerCardsValue <= 21) {
        
        var image = new Image();
        image.setAttribute('class', 'card');
        image.src = basePathCards + deck[cardCount].path;
        document.getElementById("dealerCards").appendChild(image);
        dealerHand.push(deck[cardCount].value);
        dealerCardCount = 0;
        dealerCardsValue = 0;
        for (; dealerCardCount < dealerHand.length; dealerCardCount++) {
            dealerCardsValue += dealerHand[dealerCardCount];
        }
        if (dealerCardsValue > 21) {
            dealerCardCount = 0;
            for (; dealerCardCount < dealerHand.length; dealerCardCount++) {
                if (dealerHand[dealerCardCount] == 11) {
                    dealerHand[dealerCardCount] = 1;
                    dealerCardsValue = 0;
                    dealerCardCount = 0;
                    for (; dealerCardCount < dealerHand.length; dealerCardCount++) {
                        dealerCardsValue += dealerHand[dealerCardCount];
                    }
                }
                if (dealerCardsValue < 21) {
                    break;
                }
            }

        }
        cardCount++;
    }

    document.getElementById('endCardPoints').innerHTML = "" + dealerCardsValue + "";
    setTimeout(endRound, 1000);
}

function hit() {
    if (playerCardsValue <= 21) {
        createDealCard(360, 525);

        var image = new Image();
        image.setAttribute('class', 'card');
        image.src = basePathCards + deck[cardCount].path;
        setTimeout(function() {
            document.getElementById("userCards").appendChild(image);
        }, 1000);
        playerHand.push(deck[cardCount].value);
        playerCardCount = 0;
        playerCardsValue = 0;

        for (; playerCardCount < playerHand.length; playerCardCount++) {
            playerCardsValue += playerHand[playerCardCount];
        }
        if (playerCardsValue > 21) {
            playerCardCount = 0;
            for (; playerCardCount < playerHand.length; playerCardCount++) {
                if (playerHand[playerCardCount] == 11) {
                    playerHand[playerCardCount] = 1;
                    playerCardsValue = 0;
                    playerCardCount = 0;
                    for (; playerCardCount < playerHand.length; playerCardCount++) {
                        playerCardsValue += playerHand[playerCardCount];
                    }
                }
                if (playerCardsValue < 21) {
                    break;
                }
            }

        }
        document.getElementById("cardPoints").innerHTML = playerCardsValue;

        cardCount++;
        if (playerCardsValue > 21) {
            document.getElementById('playDisplay').style.display = 'none';
            setTimeout(endRound, 2000);
        }
    }

}

document.getElementById('doubleButton').addEventListener('click', doubleUp);

function doubleUp() {
    playerBet = playerBet * 2;
    alert(playerBet);
    hit();
}

//function split() {
//
//}
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

// * * * * * * * * * * * * * * * * * * * * * * * * * * End of Round * * * * * * * * * *  * * * * * * * * * * * * * * * * * * * * * * * 
function moveChips() {
    var position = 0;
    var position2 = 0;
    for (; 0 <= numberOfChips; --numberOfChips) {
        var chipRemove = "#chipId" + numberOfChips + "";
        if ((playerCardsValue > dealerCardsValue && playerCardsValue < 21) || dealerCardsValue > 21) {
            position = -200;
            position2 = -800;
        } else if (dealerCardsValue == playerCardsValue) {
            position = -200;
            position2 = -800;
        } else {
            position = 400;
            position2 = -250;
        }
        removeChips(chipRemove, position, position2)
    }

}


function removeChips(chipRemove, position, position2) {
    $(document).ready(function() {

        $(chipRemove).animate({
            left: position2,
            bottom: position
        }, 1000, function() {
            $(chipRemove).remove();
        });

    });
}

function endOfGameNotifications(result) {
    document.getElementById('endOfGame').innerHTML = "<p>" + result + "</p>";
}

function endRound() {

    moveChips();
    if ((playerCardsValue > dealerCardsValue && playerCardsValue < 21) || dealerCardsValue > 21) { //checking who won
        userVictory += 1;
        var result = "You win!";
        endOfGameNotifications(result);
        userBalance += +playerBet;
    } else if (dealerCardsValue == playerCardsValue) {
        var result = "We have a draw!";
        endOfGameNotifications(result);
    } else {
        dealerVictory += 1;

        var result = "You lose!";
        endOfGameNotifications(result);
        userBalance -= +playerBet;
    }
    setTimeout(function() {
        document.getElementById('endOfGame').innerHTML = "";
        document.getElementById('endCardPoints').innerHTML = "";
        document.getElementById('dealDisplay').style.display = 'block';
        if (document.getElementById('idUserBalance').style.display != "none") {
            document.getElementById('bettingChips').style.display = "block";
        } //check if the user choose to play without betting 
    }, 1500)
    playerHand.length = 0;
    dealerHand.length = 0;
    playerCardCount = 0;
    dealerCardCount = 0;

    document.getElementById('balance').innerHTML = "<span class='glyphicon glyphicon-piggy-bank'a></span> " + userBalance + "";
    document.getElementById("score1").innerHTML = userVictory;
    document.getElementById("score2").innerHTML = dealerVictory;
    document.getElementById("userCards").innerHTML = "";
    document.getElementById("dealerCards").innerHTML = "";


    document.getElementById("cardPoints").innerHTML = "";

    chipColumn = 450;
    chipCount = 0;
    numberOfChips = 0;

    if (userBalance <= 0 && playerBet > 0) { //checking if player has any coins left
        alert('Your spend all your money, better luck next time!');
        document.getElementById('dealDisplay').style.display = 'none';
        document.getElementById('bettingChips').style.display = "none";
        document.getElementById('userData').style.display = "none";

        $(document).ready(function() {

            $("#userInfo").modal();

        });
    } // check if the user still has a remaining balace

    playerBet = 0;

}
//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * *