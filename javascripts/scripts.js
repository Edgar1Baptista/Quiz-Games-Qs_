const  configContainer = document.querySelector(".config-container");
const  quizContainer = document.querySelector(".quiz-container");
const  awswerOptions = document.querySelector(".answer-options");
const  nextQuestionBtn = document.querySelector(".next-question-btn");
const  questionStatus = document.querySelector(".question-status");
const  timerDisplay = document.querySelector(".timer-duration");
const  resultContainer = document.querySelector(".result-container");




//Quiz state Variables
const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null; 
let quizCategory = "africa";
let numberOfQuestions = 5;
let currentQuestion = null;
const questionIndexHistory = [];
let correctAnswerCount = 0;

//Display the quiz result and hide the quiz container
const showQuizResult = () =>{
quizContainer.style.display = "none";
resultContainer.style.display = "block";

const resultText = `Você conseguiu responder <strong>${correctAnswerCount}</strong> de <strong>${numberOfQuestions}</strong> Questões Correctamente.
Grande Esforço`;

document.querySelector(".result-message").innerHTML = resultText;

}

// Clear and reset the timer
const resertTimer = () =>{
  clearInterval(timer);
  currentTime = QUIZ_TIME_LIMIT;
  timerDisplay.textContent = `${currentTime}s`;

}



// Initialize and start the timer for the current question
const startTimer = () =>{
  timer = setInterval(()=> {
    currentTime--;
    timerDisplay.textContent = `${currentTime}s`;
    if(currentTime <= 0){
      clearInterval(timer);
      highlightCorrectAnswer();
nextQuestionBtn.style.visibility = "visible";
quizContainer.querySelector(".quiz-timer").style.background = "#c31402";
awswerOptions.querySelectorAll(".anser-option").forEach(Option => Option.style.pointerEvents = "none");

    }
  },1000);
} 

// Fetch a random question from based on the selected category
const getRandoQuestion = () =>{
const categoryQuestions = questions.find(cat => cat.category.toLowerCase()
 === quizCategory.toLowerCase()).questions || [];


//Show the results if all question have been used
 if(questionIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)){
return showQuizResult();
 }

//Filter out already asked question and choose a random one 
const availableQuestion = categoryQuestions.filter((_, index) => !questionIndexHistory.includes(index));
const randomQuestion = availableQuestion[Math.floor(Math.random() * availableQuestion.length)];

questionIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
return randomQuestion;
}
// HighlightCorrectAnswer the correct answer option 
const highlightCorrectAnswer = () =>{
  const correctOption = awswerOptions.querySelectorAll(".anser-option")[currentQuestion.correctAnswer];
  correctOption.classList.add("correct");
}

// Handle the user's answer selection
const handleAnwer = (Option, answerIndex) =>{
clearInterval(timer);
const isCorrect = currentQuestion.correctAnswer === answerIndex;
Option.classList.add(isCorrect ? 'correct' : 'incorrec');
!isCorrect ? highlightCorrectAnswer(): correctAnswerCount++;


//Disable  all answer option after one option is selected 
awswerOptions.querySelectorAll(".anser-option").forEach(Option => Option.style.pointerEvents = "none");

nextQuestionBtn.style.visibility = "visible"; 

 }

//render the current question and its options in the quiz 
const renderQuestion = () => {
currentQuestion =  getRandoQuestion();
if (!currentQuestion) return;
console.log(currentQuestion);
resertTimer();
startTimer();

 
  //Update the UI
awswerOptions.innerHTML = ""; 
nextQuestionBtn.style.visibility = "hidden";
quizContainer.querySelector(".quiz-timer").style.background = "#32313c";
document.querySelector(".question-text").textContent = currentQuestion.question;
questionStatus.innerHTML = `<strong>${questionIndexHistory.length}</strong> de <strong>${numberOfQuestions}</strong> Perguntas`;

//Create option <li> elements, append them, and add click event listeners
currentQuestion.options.forEach((Option, index) => {
  const li = document.createElement("li");
  li.classList.add("anser-option");
  li.textContent = Option;
  awswerOptions.appendChild(li)
  li.addEventListener("click", () => handleAnwer(li,index));
});

}

//Start the quiz render the random question
const startQuiz = () =>{
  configContainer.style.display = "none";
  quizContainer.style.display = "block";

//Update the quiz category and number of questions 
quizCategory = configContainer.querySelector(".category-option.active").textContent;
 numberOfQuestions = parseInt(configContainer.querySelector(".question-option.active").textContent); 


renderQuestion();
   
}
// highlight the selected option on click - category or no. of question
 document.querySelectorAll(".category-option, .question-option").forEach(Option =>{
  Option.addEventListener("click", () => {
    Option.parentNode.querySelector(".active").classList.remove("active");
    Option.classList.add("active");
  });
 }); 

// Resert the quiz and return to the configuration container
const resetQuiz = () =>{
  resertTimer();
  correctAnswerCount = 0;
  questionIndexHistory.length = 0;
  configContainer.style.display = "block";
  resultContainer.style.display = "none";
renderQuestion();

  
}

nextQuestionBtn.addEventListener("click", renderQuestion);
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
document.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);


