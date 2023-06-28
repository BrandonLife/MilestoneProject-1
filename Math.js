export function math() {
  let operands = ["+", "-", "/", "x"];
  let questionBox = document.createElement("div");
  let answerInput = document.createElement("input");
  answerInput.setAttribute("id", "userInput");
  let generateProblemBtn = document.createElement("button");
  let correctAnswer;
  let userAnswer = Number(answerInput.value);
  generateProblemBtn.textContent = "Generate Problem/Submit";
  generateProblemBtn.style.position = "absolute";
  generateProblemBtn.style.top = 40 + "%";
  generateProblemBtn.style.left = 47.5 + "%";
  generateProblemBtn.style.zIndex = 2;
  document.body.append(generateProblemBtn);
  let result = document.createElement("div");
  let score = 0;
  console.log(userAnswer);
  generateProblemBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let randomNum1 = Math.floor(Math.random() * 11);
    let randomNum2 = Math.floor(Math.random() * 11);
    let randomOperandGeneration = Math.floor(Math.random() * 4) + 0;
    let operandSymbol = operands[randomOperandGeneration];

    if (operandSymbol === "+") {
      questionBox.textContent = `What is ${randomNum1}${operandSymbol}${randomNum2}`;
      correctAnswer = randomNum1 + randomNum2;
    } else if (operandSymbol === "-") {
      questionBox.textContent = `What is ${randomNum1}${operandSymbol}${randomNum2}`;
      correctAnswer = randomNum1 - randomNum2;
    } else if (operandSymbol === "x") {
      questionBox.textContent = `What is ${randomNum1}${operandSymbol}${randomNum2}`;
      correctAnswer = randomNum1 * randomNum2;
    } else if (operandSymbol === "/") {
      questionBox.textContent = `What is ${randomNum1}${operandSymbol}${randomNum2}`;
      correctAnswer = randomNum1 / randomNum2;
    }
    console.log(userAnswer, correctAnswer);

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

    if (userAnswer === correctAnswer) {
      score++;
      console.log(score);
    }
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
