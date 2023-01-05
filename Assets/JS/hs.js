let scores = JSON.parse(localStorage.getItem('scores'));
let clear = document.getElementById("clearScores");

for (let i=0; i < scores.length; i++) {
    let liEl = document.createElement("li");
    liEl.textContent = scores[i];
    let olEl = document.getElementById("populateScores");
    olEl.appendChild(liEl);
}

clear.addEventListener("click", clearScores);
function clearScores(){
    localStorage.removeItem('scores');
    window.location.reload()
}



