function printHighScores() {
    // either get scores from localStorage or set to empty array
    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
  
    // sort highScores by score property in descending order
    highScores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highScores.forEach(function(score) {
      // create li tag for each high score
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;
  
      // display on page
      var olEl = document.getElementById("highScores");
      olEl.appendChild(liTag);
    });
  }
  
  function clearHighScores() {
    window.localStorage.removeItem("highScores");
    window.location.reload();
  }
  
  document.getElementById("clear").onclick = clearHighScores;
  
  // run function when page loads
  printHighScores();