"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mouseover = void 0;
function mouseover() {
    var playButton = document.getElementById("playBtn"); //these individual event listenters are mine
    playButton.addEventListener("mouseover", function (e) {
        e.preventDefault();
        playButton.style.backgroundColor = "green";
        playButton.style.fontSize = "70px";
    });
}
exports.mouseover = mouseover;
