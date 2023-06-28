console.log("Can you see this");
console.log("Before Import");
import { math } from "./Math.js";
import { mouseout } from "./mouseout.js";
import { mouseover } from "./mouseover.js";
import { timer } from "./timer.js";
import { walkAnimation } from "./walkAnimation.js";

console.log("After Import");
function play() {
  let playButton = document.getElementById("playBtn"); //these individual event listenters are mine
  let player = document.getElementById("santa");
  mouseover();
  mouseout();
  playButton.addEventListener("click", (e) => {
    e.preventDefault();
    math();
    timer(80);
    let title = document.getElementById("titleId");
    let horizontalPlacement = 0;
    let verticalPlacement = 720;
    let playerSpeed = 10;

    let keystroke = 0;
    title.style.display = "none";
    playButton.style.display = "none";

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
      if (keystroke >= 19) {
        keystroke = 0;
      } else {
        keystroke++;
      }
      if (key === "a") {
        horizontalPlacement -= playerSpeed;
        walkAnimation(keystroke);
      } else if (key === "d") {
        horizontalPlacement += playerSpeed;
        walkAnimation(keystroke);
      }

      ///Check for a barrier on the left and right hand screens
      if (horizontalPlacement < barrierLeft) {
        horizontalPlacement = 0;
      } else if (horizontalPlacement >= barrierRight) {
        horizontalPlacement = 1780;
      }
      player.style.left = horizontalPlacement + "px";
      player.style.top = verticalPlacement + "px";
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
