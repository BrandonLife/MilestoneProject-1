export function math() {
  let operands = ["+", "-", "/", "x"];
  let questionBox = document.createElement("div");
  let answerInput = document.createElement("input");
  answerInput.setAttribute("id", "userInput");
  let generateProblemBtn = document.createElement("button");

  let question;

  generateProblemBtn.textContent = "Generate Problem/Submit";
  generateProblemBtn.style.position = "absolute";
  generateProblemBtn.style.top = 40 + "%";
  generateProblemBtn.style.left = 47.5 + "%";
  generateProblemBtn.style.zIndex = 2;
  document.body.append(generateProblemBtn);
  let result = document.createElement("div");

  generateProblemBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let score = 0;
    let randomNum1 = Math.floor(Math.random() * 11);
    let randomNum2 = Math.floor(Math.random() * 11);
    let randomOperandGeneration = Math.floor(Math.random() * 4) + 0;
    let operandSymbol = operands[randomOperandGeneration];
    let userAnswer = Number(answerInput.value);
    let correctAnswer = 0;
    if (userAnswer === correctAnswer) {
      score++;
    }
    if (operandSymbol === "+") {
      question = `What is ${randomNum1} ${operandSymbol} ${randomNum2}`;
      correctAnswer = randomNum1 + randomNum2;
    } else if (operandSymbol === "-") {
      question = `What is ${randomNum1} ${operandSymbol} ${randomNum2}`;
      correctAnswer = randomNum1 - randomNum2;
    } else if (operandSymbol === "x") {
      question = `What is ${randomNum1} ${operandSymbol} ${randomNum2}`;
      correctAnswer = randomNum1 * randomNum2;
    } else if (operandSymbol === "/") {
      if (randomNum1 < randomNum2) {
        randomNum2 = randomNum1;
      }
      question = `What is ${randomNum1} ${operandSymbol} ${randomNum2}`;
      correctAnswer = randomNum1 / randomNum2;
    }

    questionBox.textContent = question;
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
    document.body.append(answerInput);
    document.body.append(questionBox);

    if (userAnswer === correctAnswer) {
      score++;
    }
    setTimeout(() => {
      if (score >= 1) {
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
