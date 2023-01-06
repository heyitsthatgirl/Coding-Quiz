let scores = JSON.parse(localStorage.getItem('scores'));
let clear = document.getElementById("clearScores");

// if there are no scores saved in local storage then different text is displayed
if (scores == null) {
    let noScore = document.getElementById("noScore");
    noScore.textContent = "No High Scores Yet!";
}
// if there are saved scores they will appear as list items
else {
    for (let i=0; i < scores.length; i++) {
        let liEl = document.createElement("li");
        liEl.textContent = scores[i];
        let olEl = document.getElementById("populateScores");
        olEl.appendChild(liEl);
    }
}

// high scores are cleared when the clear scores button is clicked
clear.addEventListener("click", clearScores);
function clearScores(){
    localStorage.removeItem('scores');
    window.location.reload()
}



