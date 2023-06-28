let questions = [
  "What is 10 +10",
  "What is 100/5",
  "What is 10x4",
  "What is 2x2",
  "What is 3x5",
  "What is 6+17",
  "What is 4+6",
  "What is 20-20",
  "What is 3-2",
  "What is 7+7",
  "What is 20/4",
  "What is 4+5",
  "What is 6*6",
  "What is 1x1",
  "What is 4x4",
  "What is 5-4",
  "What is 4-1",
  "What is 9*9",
  "What is 12-7",
  "What is 8+5+3",
];

export function math() {
  let questionBox = document.createElement("div");
  let answerInput = document.createElement("input");
  let generateProblemBtn = document.createElement("button");
  let userAnswer, predefinedAnswer;
  userAnswer = answerInput.value;
  generateProblemBtn.textContent = "Generate problem";
  generateProblemBtn.style.position = "absolute";
  generateProblemBtn.style.top = 40 + "%";
  generateProblemBtn.style.left = 47.5 + "%";
  generateProblemBtn.style.zIndex = 2;
  document.body.append(generateProblemBtn);
  let result = document.createElement("div");
  let score = 0;
  generateProblemBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let questionRandomizer = Math.floor(Math.random() * 20) + 0;
    questionBox.textContent = questions[questionRandomizer];
    console.log(questionBox.textContent);
    if (questionRandomizer === 0) {
      predefinedAnswer = 20;
    } else if (questionRandomizer === 1) {
      predefinedAnswer = 20;
    } else if (questionRandomizer === 2) {
      predefinedAnswer = 40;
    } else if (questionRandomizer === 3) {
      predefinedAnswer = 4;
    } else if (questionRandomizer === 4) {
      predefinedAnswer = 15;
    } else if (questionRandomizer === 5) {
      predefinedAnswer = 23;
    } else if (questionRandomizer === 6) {
      predefinedAnswer = 10;
    } else if (questionRandomizer === 7) {
      predefinedAnswer = 0;
    } else if (questionRandomizer === 8) {
      predefinedAnswer = 1;
    } else if (questionRandomizer === 9) {
      predefinedAnswer = 14;
    } else if (questionRandomizer === 10) {
      predefinedAnswer = 5;
    } else if (questionRandomizer === 11) {
      predefinedAnswer = 9;
    } else if (questionRandomizer === 12) {
      predefinedAnswer = 36;
    } else if (questionRandomizer === 13) {
      predefinedAnswer = 1;
    } else if (questionRandomizer === 14) {
      predefinedAnswer = 16;
    } else if (questionRandomizer === 15) {
      predefinedAnswer = 1;
    } else if (questionRandomizer === 16) {
      predefinedAnswer = 3;
    } else if (questionRandomizer === 17) {
      predefinedAnswer = 81;
    } else if (questionRandomizer === 18) {
      predefinedAnswer = 20;
    } else if (questionRandomizer === 19) {
      predefinedAnswer = 5;
    } else if (questionRandomizer === 20) {
      predefinedAnswer = 16;
    }
    userAnswer = Number(userAnswer);
    console.log(userAnswer, predefinedAnswer);
    if (userAnswer === predefinedAnswer) {
      score++;
    }
    questionBox.style.position = "absolute";
    questionBox.style.top = 30 + "%";
    questionBox.style.left = 45 + "%";
    questionBox.style.zIndex = 2;
    questionBox.style.fontSize = 40 + "px";
    answerInput.style.position = "absolute";
    answerInput.style.top = 35 + "%";
    answerInput.style.left = 45 + "%";
    answerInput.style.zIndex = 2;
    answerInput.style.width = 10 + "%";
    document.body.append(questionBox);
    document.body.append(answerInput);

    setTimeout(() => {
      if (score >= 10) {
        result.textContent = "You Win. You are a math wizard.";
        result.style.position = "absolute";
        result.style.top = 30 + "%";
        result.style.left = 47.5 + "%";
        result.style.zIndex = 2;
        questionBox.style.display = "none";
        answerInput.style.display = "none";
        document.body.append(result);
      } else {
        result.textContent = "You lose. Try again";
        result.style.position = "absolute";
        result.style.top = 30 + "%";
        result.style.left = 47.5 + "%";
        result.style.zIndex = 2;
        questionBox.style.display = "none";
        answerInput.style.display = "none";
        document.body.append(result);
      }
    }, 80000);
  });
}
