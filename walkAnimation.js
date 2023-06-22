export function walkAnimation(keyStrokeCount) {
  let walkFrame = [
    "./png_santa_2_Walk_000.png",
    "./png_santa_2_Walk_001.png",
    "./png_santa_2_Walk_002.png",
    "./png_santa_2_Walk_003.png",
    "./png_santa_2_Walk_004.png",
    "./png_santa_2_Walk_005.png",
    "./png_santa_2_Walk_006.png",
    "./png_santa_2_Walk_007.png",
    "./png_santa_2_Walk_008.png",
    "./png_santa_2_Walk_009.png",
    "./png_santa_2_Walk_010.png",
    "./png_santa_2_Walk_011.png",
    "./png_santa_2_Walk_012.png",
    "./png_santa_2_Walk_013.png",
    "./png_santa_2_Walk_014.png",
    "./png_santa_2_Walk_015.png",
    "./png_santa_2_Walk_016.png",
    "./png_santa_2_Walk_017.png",
    "./png_santa_2_Walk_018.png",
    "./png_santa_2_Walk_019.png",
  ];
  let player = document.getElementById("character");
  console.log("Keystroke count", keyStrokeCount);

  // console.log(counter, "counter");
  // console.log(walkFrame.length, "cwalkframe length");
  console.log(keyStrokeCount >= walkFrame.length);

  player.src = walkFrame[keyStrokeCount];
}
