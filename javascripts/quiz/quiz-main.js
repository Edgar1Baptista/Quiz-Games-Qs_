// quiz-main.js
import { questions } from './quiz-questions.js';
import { QUIZ_TIME_LIMIT, resertTimerState, getRandomQuestion, isAnswerCorrect } from './quiz-core.js';
import { DOM, updateTimerDisplay, highlightCorrectAnswer, disableOptions, clearOptions, renderOptions, updateQuestionStatus, showResult, resetUI } from './quiz-dom.js';

let timerState = resertTimerState();
let quizCategory = 'africa';
let numberOfQuestions = 5;
let currentQuestion = null;
const questionIndexHistory = [];
let correctAnswerCount = 0;

const resertTimer = () => {
  clearInterval(timerState.timer);
  timerState = resertTimerState();
  updateTimerDisplay(timerState.currentTime);
};

const startTimer = () => {
  timerState.timer = setInterval(() => {
    timerState.currentTime--;
    updateTimerDisplay(timerState.currentTime);
    if (timerState.currentTime <= 0) {
      clearInterval(timerState.timer);
      highlightCorrectAnswer(currentQuestion.correctAnswer);
      DOM.nextQuestionBtn.style.visibility = 'visible';
      DOM.quizTimer.style.background = '#c31402';
      disableOptions();
    }
  }, 1000);
};

const handleAnswer = (optionElement, selectedIndex) => {
  clearInterval(timerState.timer);
  const correct = isAnswerCorrect(currentQuestion.correctAnswer, selectedIndex);
  optionElement.classList.add(correct ? 'correct' : 'incorrec');
  if (!correct) highlightCorrectAnswer(currentQuestion.correctAnswer);
  else correctAnswerCount++;
  disableOptions();
  DOM.nextQuestionBtn.style.visibility = 'visible';
};

const renderQuestion = () => {
  const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase())?.questions || [];
  currentQuestion = getRandomQuestion(categoryQuestions, questionIndexHistory, numberOfQuestions);
  if (!currentQuestion) return showResult(correctAnswerCount, numberOfQuestions);

  resertTimer();
  startTimer();

  clearOptions();
  DOM.nextQuestionBtn.style.visibility = 'hidden';
  DOM.quizTimer.style.background = '#32313c';
  DOM.questionText.textContent = currentQuestion.question;
  updateQuestionStatus(questionIndexHistory.length, numberOfQuestions);
  renderOptions(currentQuestion.options, handleAnswer);
};

const startQuiz = () => {
  DOM.configContainer.style.display = 'none';
  DOM.quizContainer.style.display = 'block';
  quizCategory = DOM.configContainer.querySelector('.category-option.active').textContent;
  numberOfQuestions = parseInt(DOM.configContainer.querySelector('.question-option.active').textContent);
  renderQuestion();
};

const resetQuiz = () => {
  resertTimer();
  correctAnswerCount = 0;
  questionIndexHistory.length = 0;
  resetUI();
  renderQuestion();
};

DOM.categoryOptions.forEach(opt => {
  opt.addEventListener('click', () => {
    opt.parentNode.querySelector('.active')?.classList.remove('active');
    opt.classList.add('active');
  });
});

DOM.questionOptions.forEach(opt => {
  opt.addEventListener('click', () => {
    opt.parentNode.querySelector('.active')?.classList.remove('active');
    opt.classList.add('active');
  });
});

DOM.nextQuestionBtn.addEventListener('click', renderQuestion);
DOM.tryAgainBtn.addEventListener('click', resetQuiz);
DOM.startQuizBtn.addEventListener('click', startQuiz);