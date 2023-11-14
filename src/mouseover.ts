export function mouseover():any {
  let playButton: any = document.getElementById("playBtn"); //these individual event listenters are mine
  playButton.addEventListener("mouseover", (e: any) => {
    e.preventDefault();
    playButton.style.backgroundColor = "green";
    playButton.style.fontSize = "70px";
  });
}
