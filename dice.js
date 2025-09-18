function rollDice() {
  //1
  var randomNum1 = Math.floor(Math.random() * 6) + 1;
  var image1Path = "images/dice" + randomNum1 + ".png";
  console.log(image1Path)

  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", image1Path);

  //2
  var randomNum2 = Math.floor(Math.random() * 6) + 1;
  var image2Path = "images/dice" + randomNum2 + ".png";
  console.log(image2Path)

  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", image2Path);


   var title = document.querySelector("h1");
  if (randomNum1 > randomNum2) {
    title.textContent = "Player 1 Wins";
  } else if (randomNum2 > randomNum1) {
    title.textContent = "Player 2 Wins";
  } else {
    title.textContent = "Draw";
  }
}

document.getElementById("rollAll").addEventListener("click", rollDice);
