// Iteration 5: Store the player score and display it on the game over screenstore
let storedScore = localStorage.getItem("score");
let showScore = document.getElementById("score-board");
showScore.innerHTML=storedScore;
// For play again button
let overButton= document.getElementById("play-again-button");
overButton.addEventListener("click",function(){
    window.location.href="index.html";
});