export function fallingItems() {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //from chatGPT
  }
  let gameContainer = document.getElementById("container");
  let player = document.getElementById("character");
  let score = 0;
  let maxItems = 3;
  let activeItems = [];

  function createItem() {
    if (activeItems.length < maxItems) {
      let gifts = document.createElement("div");
      gifts.classList.add("gifts");
      gameContainer.appendChild(gifts);
      gifts.style.left =
        getRandomNumber(0, gameContainer.offsetWidth - gifts.offsetWidth) +
        "px";
      gifts.style.top =
        getRandomNumber(
          -60, // items will start more toward the top of the container
          gameContainer.offsetHeight - gifts.offsetHeight
        ) + "px";
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
          setTimeout(() => {
            if (score >= 14) {
              //you win
              let winner = document.getElementById("winnerH1");
              winner.textContent = "You Win! Congratulations";
              clearInterval(itemInterval);
            } else {
              let winner = document.getElementById("winnerH1");
              let score = document.getElementById("score");
              score.style.display = "none";
              winner.textContent = "You lose. Sorry Try again";
              clearInterval(itemInterval);
            }
          }, 60000);
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

    function startGame() {
      setInterval(createItem, 8000); // Adjust the interval duration to control the item generation rate
    }

    startGame();
  }
  createItem();
}
