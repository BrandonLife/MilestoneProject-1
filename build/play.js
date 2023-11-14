"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Can you see this");
console.log("Before Import");
var Math_js_1 = require("./Math.js");
var mouseout_js_1 = require("./mouseout.js");
var mouseover_js_1 = require("./mouseover.js");
var timer_js_1 = require("./timer.js");
console.log("After Import");
function play() {
    var playButton = document.getElementById("playBtn"); //these individual event listenters are mine
    var paragrah = document.getElementById('paragraph');
    (0, mouseover_js_1.mouseover)();
    (0, mouseout_js_1.mouseout)();
    playButton.addEventListener("click", function (e) {
        e.preventDefault();
        (0, Math_js_1.math)();
        (0, timer_js_1.timer)(80);
        var title = document.getElementById("titleId");
        title.style.display = "none";
        playButton.style.display = "none";
        paragrah.style.display = 'none';
        console.log("Playbutton on click");
        //check if the key is pressed
    });
}
play();
