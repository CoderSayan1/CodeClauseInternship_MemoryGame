let timer = 30;
let score = 0;
let hitrn = 0;

function makeBubble() {
  let clutter = "";
  let numBubbles;
  if (window.innerWidth < 650) {
    numBubbles = 30;
  } else{
    numBubbles = 50;
  }
  for (let i = 0; i < numBubbles; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            let str = `Your score is ${score}` + `<br>` + `Game Over!!`
            document.querySelector("#pbottom").innerHTML = `<h1>${str}</h1>`
            document.querySelector("#scoreval").textContent = 0;
            document.querySelector("#hitval").textContent = 0;
            let mySound = new Audio('audio/audio.mp3');
            mySound.play();
        }
    }, 1000);
}

function getHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function getScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbottom").addEventListener("click", function(dets){
    let clickedNum = Number(dets.target.textContent)
    // console.log(clickedNum)
    if(hitrn === clickedNum){
        getScore();
        getHit();
        makeBubble();
    }
})

document.querySelector("#btn").addEventListener("click", function(){
    if(timer == 0){
        timer = 30;
        score = 0;
        makeBubble();
        runTimer();
        getHit();
    }
})

document.querySelector("#play").addEventListener("click", function(){
    makeBubble();
    runTimer();
    getHit();
})