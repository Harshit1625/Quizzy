const questions = [
  {
    question: "What is the main objective of Badminton?",
    answers: [
      { text: "Score Goals", correct: false },
      { text: "Hit a shuttlecock over the net", correct: true },
      { text: "Dunk the ball", correct: false },
      { text: "Pass the ball to teammates", correct: false },
    ],
  },

  {
    question:
      "In Badminton,how many players are there in a standard singles match?",
    answers: [
      { text: "2 players", correct: true },
      { text: "4 players", correct: false },
      { text: "6 players", correct: false },
      { text: "8 players", correct: false },
    ],
  },

  {
    question: "How many players are there on a standard Football(Soccer) team?",
    answers: [
      { text: "5 players", correct: false },
      { text: "11 players", correct: true },
      { text: "7 players", correct: false },
      { text: "9 players", correct: false },
    ],
  },

  {
    question:
      "What is the term for scoring three goals in a single Football(Soccer) game?",
    answers: [
      { text: "Hat-trick", correct: true },
      { text: "Slamdunk", correct: false },
      { text: "Touchdown", correct: false },
      { text: "Strikeout", correct: false },
    ],
  },

  {
    question:
      " In which year did India become the Champion of World Cup Cricket for the first time?",
    answers: [
      { text: "1981", correct: false },
      { text: "1982", correct: false },
      { text: "1983", correct: true },
      { text: "1986", correct: false },
    ],
  },

  {
    question: " Which country is called as the 'Father of Cricket'?",
    answers: [
      { text: "India", correct: false },
      { text: "England", correct: true },
      { text: "Sri Lanka", correct: false },
      { text: "None of these", correct: false },
    ],
  },

  {
    question: "The word 'Checkmate' is associated with which sport?",
    answers: [
      { text: "Chess", correct: true },
      { text: "Soccer", correct: false },
      { text: "Cricket", correct: false },
      { text: "Wrestling", correct: false },
    ],
  },

  {
    question: "What is the National Sport of India?",
    answers: [
      { text: "Kabaddi", correct: false },
      { text: "Chess", correct: false },
      { text: "Hockey", correct: true },
      { text: "Cricket", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("ans-buttons");
const nextButton = document.getElementById("nxt-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click" , selectAnswer)
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e){
   const selectedBtn = e.target;
   const isCorrect = selectedBtn.dataset.correct === "true";
   if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
   }
   else{
    selectedBtn.classList.add("Incorrect")
   }
   Array.from(answerButton.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
   });
   nextButton.style.display ="block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block"
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}


nextButton.addEventListener('click' , ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }
  else{
    startQuiz();
  }
})

startQuiz();
