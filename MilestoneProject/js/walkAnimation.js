export function walkAnimation(keyStrokeCount) {
  let walkFrame = [
    "../img/png_santa_2_Walk_000.png",
    "../img/png_santa_2_Walk_001.png",
    "../img/png_santa_2_Walk_002.png",
    "../img/png_santa_2_Walk_003.png",
    "../img/png_santa_2_Walk_004.png",
    "../img/png_santa_2_Walk_005.png",
    "../img/png_santa_2_Walk_006.png",
    "../img/png_santa_2_Walk_007.png",
    "../img/png_santa_2_Walk_008.png",
    "../img/png_santa_2_Walk_009.png",
    "../img/png_santa_2_Walk_010.png",
    "../img/png_santa_2_Walk_011.png",
    "../img/png_santa_2_Walk_012.png",
    "../img/png_santa_2_Walk_013.png",
    "../img/png_santa_2_Walk_014.png",
    "../img/png_santa_2_Walk_015.png",
    "../img/png_santa_2_Walk_016.png",
    "../img/png_santa_2_Walk_017.png",
    "../img/png_santa_2_Walk_018.png",
    "../img/png_santa_2_Walk_019.png",
  ];
  let player = document.getElementById("character");
  console.log("Keystroke count", keyStrokeCount);

  // console.log(counter, "counter");
  // console.log(walkFrame.length, "cwalkframe length");
  console.log(keyStrokeCount >= walkFrame.length);

  player.src = walkFrame[keyStrokeCount];
}
