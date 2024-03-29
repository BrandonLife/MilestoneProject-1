export function math() {
  let operands = ["+", "-", "/", "x"];
  let questionBox = document.createElement("div");
  let answerInput = document.createElement("input");
  answerInput.setAttribute("id", "userInput");
  let generateProblemBtn = document.createElement("button");
  let score = 0;
  let question;

  generateProblemBtn.textContent = "Generate Problem/Submit";
  generateProblemBtn.style.position = "absolute";
  generateProblemBtn.style.top = 37 + "%";
  generateProblemBtn.style.left = 46 + "%";
  generateProblemBtn.style.zIndex = 2;
  document.body.append(generateProblemBtn);
  let result = document.createElement("div");
  let correctAnswer=0
  generateProblemBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let scoreBox = document.createElement('div')
    let randomNum1 = Math.floor(Math.random() * 11);
    let randomNum2 = Math.floor(Math.random() * 11);
    let randomOperandGeneration = Math.floor(Math.random() * 4) + 0;
    let operandSymbol = operands[randomOperandGeneration];
  
    let userAnswer = Number(answerInput.value);
    
    if (userAnswer === correctAnswer) {
    score++
    if(score === 1 && userAnswer=== 0 && correctAnswer === 0){
      score -=1
    }
    
   
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
      if(randomNum2 === 0){
        randomNum2= Math.floor(Math.random() * 11);
      }
      question = `What is ${randomNum1} ${operandSymbol} ${randomNum2}`;
      correctAnswer = randomNum1 / randomNum2;
      if(correctAnswer <0){
        correctAnswer= correctAnswer.toFixed(2)
      }
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

   let scoreChange = setInterval(()=>{
    scoreBox.textContent = `Point(s): ${score}`
    scoreBox.style.position = "absolute";
    scoreBox.style.top = 60 + "%";
    scoreBox.style.left = 43 + "%";
    scoreBox.style.zIndex = 3;
    scoreBox.style.fontSize = 100 + "px"
    document.body.append(scoreBox)
   },0)
   
   if(scoreBox.textContent){
    clearInterval(scoreChange)
   }
     
   
    document.body.append(answerInput);
    document.body.append(questionBox);
   
   
    setTimeout(() => {
      if (score >= 15) {
        result.textContent = "You Win. You are a math wizard.";
        result.style.position = "absolute";
        result.style.top = 30 + "%";
        result.style.left = 46 + "%";
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
