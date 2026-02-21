let currentMoleTile;
let currentPlantTile;
let score = 0;
let gameOver = false;

window.onload = function () {
  setGame();
};

function setGame() {
  if (gameOver) {
    return;
  }

  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i;
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
  }

  setInterval(setMole, 1000);
  setInterval(setPlant, 1500);
}

function randomNum() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (gameOver) {
    return;
  }

  if (currentMoleTile) {
    currentMoleTile.innerHTML = "";
  }

  let mole = document.createElement("img");
  mole.src = "../images/monty-mole.png";

  let num = randomNum();
  if (currentPlantTile && currentPlantTile.id === num) {
    return;
  }
  currentMoleTile = document.getElementById(num);
  currentMoleTile.appendChild(mole);
}

function setPlant() {
  if (gameOver) {
    return;
  }

  if (currentPlantTile) {
    currentPlantTile.innerHTML = "";
  }

  let plant = document.createElement("img");
  plant.src = "../images/piranha-plant.png";

  let num = randomNum();
  if (currentMoleTile && currentMoleTile.id === num) {
    return;
  }
  currentPlantTile = document.getElementById(num);
  currentPlantTile.appendChild(plant);
}

function selectTile() {
  if (this == currentMoleTile) {
    score += 10;
    document.querySelector(".score").innerText = score;
  } else if (this == currentPlantTile) {
    document.querySelector(".score").innerText =
      "Game Over! Final Score: " + score.toString();
    gameOver = true;
  }
}
