const coin = document.getElementById("coin");
const flipBtn = document.getElementById("flip");
const restartBtn = document.getElementById("restart");
let headsCount = document.getElementById("headsCount");
let tailsCount = document.getElementById("tailsCount");
let tails = 0;
let heads = 0;


let flipCoin = () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    console.log(i)
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
}

function updateStats(){
    headsCount.textContent = `Heads: ${heads}`;
    tailsCount.textContent = `Tails: ${tails}`;
}

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}

restartBtn.addEventListener("click",() => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
});

coin.addEventListener('click',flipCoin)

flipBtn.addEventListener('click',flipCoin);



