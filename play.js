console.log("Can you see this");
console.log("Before Import");
import { math } from "./Math.js";
import { mouseout } from "./mouseout.js";
import { mouseover } from "./mouseover.js";
import { timer } from "./timer.js";

console.log("After Import");
function play() {
  let playButton = document.getElementById("playBtn"); //these individual event listenters are mine
  mouseover();
  mouseout();
  playButton.addEventListener("click", (e) => {
    e.preventDefault();
    math();
    timer(80);
    let title = document.getElementById("titleId");
    title.style.display = "none";
    playButton.style.display = "none";
    console.log("Playbutton on click");
    //check if the key is pressed
    });
}
play();
