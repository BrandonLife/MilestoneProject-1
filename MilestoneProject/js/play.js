let walkFrame = [
  "../img/png_santa_2_Walk_000.png",
  "../img/png_santa_2_Walk_001.png",
  "../img/png_santa_2_Walk_002.png",
  "../img/png_santa_2_Walk_003.png",
  "../img/png_santa_2_Walk_004.png",
  "../img/png_santa_2_Walk_005.png",
  "../img/png_santa_2_Walk_006.png",
  "../img/png_santa_2_Walk_007.png",
  "../img/png_santa_2_Walk_008.png",
  "../img/png_santa_2_Walk_009.png",
  "../img/png_santa_2_Walk_010.png",
  "../img/png_santa_2_Walk_011.png",
  "../img/png_santa_2_Walk_012.png",
  "../img/png_santa_2_Walk_013.png",
  "../img/png_santa_2_Walk_014.png",
  "../img/png_santa_2_Walk_015.png",
  "../img/png_santa_2_Walk_016.png",
  "../img/png_santa_2_Walk_017.png",
  "../img/png_santa_2_Walk_018.png",
  "../img/png_santa_2_Walk_019.png",
];

let character = document.getElementById("character");
var intervalId = null;
var isWalking = false;
let counter = 0;

function walkAnimation() {
  character.src = walkFrame[counter];

  counter++;
  if (counter >= walkFrame.length) {
    counter = 0;
  }
}
walkAnimation(); // from CHatGPT

function play() {
  let playButton = document.getElementById("playBtn"); //these individual event listenters are mine

  let player = document.getElementById("character");
  playButton.addEventListener("mouseover", (e) => {
    e.preventDefault();
    playButton.style.backgroundColor = "green";
    playButton.style.fontSize = "70px";
    console.log("Playbutton mouseover");
  });
  playButton.addEventListener("mouseout", (e) => {
    e.preventDefault();
    playButton.style.backgroundColor = "antiquewhite";
    playButton.style.fontSize = "60px";
    console.log("Playbutton on mouseout");
  });
  playButton.addEventListener("click", (e) => {
    e.preventDefault();
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min; //from chatGPT
    }
    let title = document.getElementById("titleId");
    let gameContainer = document.getElementById("container");
    let score = 0;
    let maxItems = 3;
    let activeItems = [];

    function createItem() {
      if (activeItems.length < maxItems) {
        let gifts = document.createElement("div");
        gifts.classList.add("gifts");
        gifts.style.left =
          getRandomNumber(0, gameContainer.offsetWidth - gifts.offsetWidth) +
          "px";
        gameContainer.appendChild(gifts);
        activeItems.push(gifts);

        // Move the item down every frame
        const itemInterval = setInterval(function () {
          const itemTop = gifts.offsetTop + 1; // Adjust the item's falling speed
          gifts.style.top = itemTop + "px";

          // Check if the item is caught by the player
          if (
            itemTop >= player.offsetTop &&
            itemTop < player.offsetTop + player.offsetHeight &&
            gifts.offsetLeft >= player.offsetLeft &&
            gifts.offsetLeft < player.offsetLeft + player.offsetWidth
          ) {
            score++;
            console.log(score);
            document.getElementById("score").textContent = "Score:" + score;
            if (score >= 8) {
              //you win
              let winner = document.getElementById("winnerH1");
              winner.textContent = "You Win! Congratulations";
            }
            gifts.remove();
            clearInterval(itemInterval);
            activeItems = activeItems.filter(
              (activeItem) => activeItem !== gifts
            );
          }

          // Check if the item is missed
          if (itemTop >= gameContainer.offsetHeight) {
            gifts.remove();
            clearInterval(itemInterval);
            activeItems = activeItems.filter(
              (activeItem) => activeItem !== gifts
            );
          }
        }, 10); // Adjust the interval duration to control the falling speed
      }
      function stopGame() {
        clearInterval(startGame);
      }

      function startGame() {
        setInterval(createItem, 8000); // Adjust the interval duration to control the item generation rate
      }

      startGame();
    }
    createItem();

    title.style.display = "none";
    playButton.style.display = "none";

    console.log("Playbutton on click");

    let x = 0;
    let y = 785;
    let playerSpeed = 10;

    let barrierLeft = 1;
    let barrierRight = 1780;

    document.addEventListener("keydown", (e) => {
      // from ChatGpT and Youtube
      let key = e.key;
      console.log(key, "letter keys pressed");
      // if (key === "ArrowUp") {
      //   y -= playerSpeed;
      //   console.log(y + "Arrow Up");
      //   walkAnimation();
      // } else if (key === "ArrowDown") {
      //   y += playerSpeed;

      if (key === "a") {
        x -= playerSpeed;

        walkAnimation();
      } else if (key === "d") {
        x += playerSpeed;

        walkAnimation();
      }
      if (x < barrierLeft) {
        x = 0;
      } else if (x >= barrierRight) {
        x = 1780;
      }
      player.style.left = x + "px";
      player.style.top = y + "px";
    });
    document.addEventListener("keyup", function (event) {
      if (event.key === "ArrowRight") {
        // check if the right arrow key has been release
        if (isWalking) {
          // clearInterval(intervalId); // from chatGPT
          isWalking = false;
        }
      }
    });
  });
}
play();
