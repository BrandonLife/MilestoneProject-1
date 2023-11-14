"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mouseout = void 0;
function mouseout() {
    var playButton = document.getElementById("playBtn"); //these individual event listenters are mine
    playButton.addEventListener("mouseout", function (e) {
        e.preventDefault();
        playButton.style.backgroundColor = "antiquewhite";
        playButton.style.fontSize = "60px";
    });
}
exports.mouseout = mouseout;
