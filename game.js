// Iteration 2: Generate 2 random number and display it on the screen
let RandomNumber1=0,RandomNumber2=0;
let div1=document.getElementById("number1");
let div2=document.getElementById("number2");

function gettingRandom(){
 RandomNumber1=Math.ceil(Math.random()*100)+1;
 RandomNumber2=Math.ceil(Math.random()*100)+1;
div1.innerText=RandomNumber1;
div2.innerText=RandomNumber2;
}
gettingRandom();
// Iteration 3: Make the options button functional
var score=0;
let greaterThan=document.getElementById("greater-than");
let equalTo=document.getElementById("equal-to");
let lessThan=document.getElementById("lesser-than");
greaterThan.addEventListener("click",function(){
    if (RandomNumber1>RandomNumber2){
        score++;
        gettingRandom();
        resetTime(timing);
    }
    else{
        window.location.href="./gameover.html";
        localStorage.setItem('score',score);
    }
})

equalTo.addEventListener("click",function(){
    if (RandomNumber1==RandomNumber2){
        score++;
        gettingRandom();
        resetTime(timing);
    }
    else{
        window.location.href="./gameover.html";
        localStorage.setItem('score',score);
    }
})

lessThan.addEventListener("click",function(){
    if (RandomNumber1<RandomNumber2){
        score++;
        gettingRandom();
        resetTime(timing);
    }
    else{
        window.location.href="./gameover.html";
        localStorage.setItem('score',score);
    }
})
// Iteration 4: Build a timer for the game
let time=5;
let timer=document.getElementById("timer");
var timing;
function timerON(){
    time = 5;
        timing =setInterval(function(){
        time--;
        if (time!=0){
            timer.innerHTML="<p>"+time+"seconds</p>";
        }
        else{
            window.location.href="./gameover.html"
            localStorage.setItem('score',score);
        }
        
    },1000);
}

function resetTime(timing) {
    clearInterval(timing);
    timerON();
  }
  
  timerON();
