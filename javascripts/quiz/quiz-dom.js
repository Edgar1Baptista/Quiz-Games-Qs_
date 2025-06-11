



// quiz-dom.js
export const $ = selector => document.querySelector(selector);

export const DOM = {
  configContainer: $('.config-container'),
  quizContainer: $('.quiz-container'),
  answerOptions: $('.answer-options'),
  nextQuestionBtn: $('.next-question-btn'),
  questionStatus: $('.question-status'),
  timerDisplay: $('.timer-duration'),
  resultContainer: $('.result-container'),
  resultMessage: $('.result-message'),
  questionText: $('.question-text'),
  tryAgainBtn: $('.try-again-btn'),
  startQuizBtn: $('.start-quiz-btn'),
  categoryOptions: document.querySelectorAll('.category-option'),
  questionOptions: document.querySelectorAll('.question-option'),
  quizTimer: $('.quiz-timer')
};

export const updateTimerDisplay = (seconds) => {
  DOM.timerDisplay.textContent = `${seconds}s`;
};

export const highlightCorrectAnswer = (correctIndex) => {
  DOM.answerOptions.querySelectorAll('.anser-option')[correctIndex].classList.add('correct');
};

export const disableOptions = () => {
  DOM.answerOptions.querySelectorAll('.anser-option').forEach(option => option.style.pointerEvents = 'none');
};

export const clearOptions = () => {
  DOM.answerOptions.innerHTML = '';
};

export const renderOptions = (options, onSelect) => {
  options.forEach((option, index) => {
    const li = document.createElement('li');
    li.classList.add('anser-option');
    li.textContent = option;
    DOM.answerOptions.appendChild(li);
    li.addEventListener('click', () => onSelect(li, index));
  });
};

export const updateQuestionStatus = (current, total) => {
  DOM.questionStatus.innerHTML = `<strong>${current}</strong> de <strong>${total}</strong> Perguntas`;
};

export const showResult = (correct, total) => {
  DOM.quizContainer.style.display = 'none';
  DOM.resultContainer.style.display = 'block';
  DOM.resultMessage.innerHTML = `Você conseguiu responder <strong>${correct}</strong> de <strong>${total}</strong> Questões Correctamente.<br>Grande Esforço`;
};

export const resetUI = () => {
  DOM.configContainer.style.display = 'block';
  DOM.resultContainer.style.display = 'none';
};