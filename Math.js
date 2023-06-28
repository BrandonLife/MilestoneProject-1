export function math() {
  let operands = ["+", "-", "/", "x"];
  let questionBox = document.createElement("div");
  let answerInput = document.createElement("input");
  let generateProblemBtn = document.createElement("button");
  let userAnswer, correctAnswer;

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
    generateProblemBtn.style.display = "none";
    let submitButton = document.createElement("button");
    submitButton.style.position = "absolute";
    submitButton.style.top = 40 + "%";
    submitButton.style.left = 47.5 + "%";
    submitButton.style.zIndex = 2;
    submitButton.textContent = "Submit Answer";
    document.body.append(submitButton);
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

    userAnswer = Number(userAnswer);
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
