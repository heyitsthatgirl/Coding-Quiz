// let storedScores = JSON.parse(localStorage.getItem("storedScores")) || [];

// storedScores.sort(function(x,y){
//     return y.score - x.score;
// });

// for (let i=0; i < storedScores.length; i++) {
//     let liEl = document.createElement("li");
//     liEl.textContent = storedScores[i].initials + " - " + storedScores[i].score;
//     let olEl = document.getElementById("highScores");
//     olEl.appendChild(liEl);
// }

// function clearScores(){
//     localStorage.removeItem("storedScores");
//     window.location.reload()
// }

// document.getElementById("clearScores").onclick = clearScores;
//re-write above as a variable?

// var storedScores = JSON.parse(localStorage.getItem("high scores: ")) ?? [];

var output = document.getElementById("populateScores");
output.innerHTML = JSON.stringify(localStorage.getItem('scores'));

// function displayScores() {
//     if(localStorage.getItem('scores') != null) {
//         output.innerHTML = "working";
//         // JSON.parse(localStorage.getItem('scores'));
//     }
// }

// for (let i =0; i < localStorage.length; i++){
   
//     var key = localStorage.key(i);
//     var value = JSON.stringify(localStorage.getItem(key));
//     output.innerHTML = key, ;
    
// }