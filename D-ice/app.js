// const img = document.createElement("img");
// img.src = "images/dice6.png";
// document.body.appendChild(img);

function rand(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    return randomNumber1;
}

function imgDice(cases, n){
    switch(cases){
        case 1:
            $(n).attr("src", "images/dice1.png");
            break;
        case 2:
            $(n).attr("src", "images/dice2.png");
            break;
        case 3:
            $(n).attr("src", "images/dice3.png");
            break;
        case 4:
            $(n).attr("src", "images/dice4.png");
            break;
        case 5:
            $(n).attr("src", "images/dice5.png");
            break;
        case 6:
            $(n).attr("src", "images/dice6.png");
            break;
        default:
            alert("That value is not on range");
            break;
    }
}

function winner(){
    var audiop1 = new Audio('audio/P1.mp3');
    var audiop2 = new Audio('audio/P2.mp3');
    var audioMario = new Audio('audio/mario.mp3');
    var a = rand();
    var b = rand();
    imgDice(a, ".img1");
    imgDice(b, ".img2");
    if(a > b){
        $("h1").text("The winner is: Player 1");
        audiop1.play();
    }
    if(b > a){
        $("h1").text("The winner is: Player 2");
        audiop2.play();
    }
    if(a === b){
        $("h1").text("It's a tie!");
        audioMario.play();
    }
}

function refresh(){
    alert("Click refresh to change the dices!");
    $("h1").click((cases) =>{
        winner();
    });
}

$(document).ready(refresh());