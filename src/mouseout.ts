export function mouseout(): any {
  let playButton: any = document.getElementById("playBtn"); //these individual event listenters are mine
  playButton.addEventListener("mouseout", (e: any) => {
    e.preventDefault();
    playButton.style.backgroundColor = "antiquewhite";
    playButton.style.fontSize = "60px";
  });
}
