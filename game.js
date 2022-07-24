const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playHand: "",
    aiHand: "",
    

}


const hands = [...document.querySelectorAll(".select img")];


//first function 
function handSelection () {
    
    game.playHand = this.dataset.option 
    //console.log(game.playHand);
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = "0 0 0 4px yellow";
}


    
function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;

}

function checkResult (player, ai){
if(player===ai){
    return 'draw';
}
else if ((player==="papier" && ai==="kamień") || (player==="kamień" && 
ai==="nożyczki")||(player==="nożyczki" && ai==="papier"))
{
    return 'win';
}
else{
    return 'lose';
}

}

//Publikacja wyników 
function publishResult (player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    
    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

if (result === "win"){
    document.querySelector('p.wins span').textContent = 
    ++gameSummary.wins;
    document.querySelector('[data-summary="who-win"]')
    .textContent = "EZ WIN ;D !!!";
    document.querySelector('[data-summary="who-win"]').style.color = "green";
}
else if (result==="lose"){
    document.querySelector('p.losses span').textContent = 
    ++gameSummary.losses;
    document.querySelector('[data-summary="who-win"]')
    .textContent = "AH SZKODA PRZEGRAŁEŚ my FRIEND :[ !!!";
    document.querySelector('[data-summary="who-win"]').style.color = "red"; 
}
else{
    document.querySelector('p.draws span').textContent = 
    ++gameSummary.draws;
    document.querySelector('[data-summary="who-win"]')
    .textContent = "REMIS my FRIEND :| !!!";
    document.querySelector('[data-summary="who-win"]').style.color = "blue"; 
}
}

function endGame () {
document.querySelector(`[data-option ="${game.playHand}"]`).style.textContent=" ";
game.hand = ""; 
}

//second function 
function StartGame () {
if (!game.playHand ){
    return alert ("Wybierz Dłoń!") 
}
game.aiHand = aiChoice()

const gameResult = checkResult(game.playHand,game.aiHand)
console.log(gameResult);
publishResult(game.playHand, game.aiHand, gameResult)
endGame()

}


hands.forEach(hand => hand.addEventListener("click",handSelection))
document.querySelector(".start").addEventListener("click",StartGame)
