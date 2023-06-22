console.log("Can you see this");
console.log("Before Import");
import { fallingItems } from "./fallingItems.js";
import { timer } from "./timer.js";
import { walkAnimation } from "./walkAnimation.js";

console.log("After Import");
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
    timer(80);
    fallingItems();
    let title = document.getElementById("titleId");
    let text = document.getElementById("text");
    let x = 0;
    let y = 785;
    let playerSpeed = 10;

    let keystroke = 0;
    title.style.display = "none";
    playButton.style.display = "none";
    text.style.display = "none";

    let barrierLeft = 1;
    let barrierRight = 1780;

    console.log("Playbutton on click");
    //check if the key is pressed
    document.addEventListener("keydown", (e) => {
      // from ChatGpT and Youtube
      let key = e.key;

      //need keystroke count
      //pass keystroke count into walkanimation
      //WalkAnimation

      console.log(key, "letter keys pressed");

      if (key === "a") {
        x -= playerSpeed;
        walkAnimation(keystroke);
      } else if (key === "d") {
        x += playerSpeed;
        walkAnimation(keystroke);
      }

      if (keystroke >= 19) {
        keystroke = 0;
      } else {
        keystroke++;
      }
      ///Check for a barrier on the left and right hand screens
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
