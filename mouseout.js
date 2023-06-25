export function mouseout() {
  let playButton = document.getElementById("playBtn"); //these individual event listenters are mine
  playButton.addEventListener("mouseout", (e) => {
    e.preventDefault();
    playButton.style.backgroundColor = "antiquewhite";
    playButton.style.fontSize = "60px";
  });
}
