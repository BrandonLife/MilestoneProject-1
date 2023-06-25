export function mouseover() {
  let playButton = document.getElementById("playBtn"); //these individual event listenters are mine
  playButton.addEventListener("mouseover", (e) => {
    e.preventDefault();
    playButton.style.backgroundColor = "green";
    playButton.style.fontSize = "70px";
  });
}
