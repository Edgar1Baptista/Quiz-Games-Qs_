// quiz-core.js
export const QUIZ_TIME_LIMIT = 15;

export const resertTimerState = () => ({
  currentTime: QUIZ_TIME_LIMIT,
  timer: null
});

export const getRandomQuestion = (categoryQuestions, history, numberOfQuestions) => {
  if (history.length >= Math.min(categoryQuestions.length, numberOfQuestions)) return null;
  const available = categoryQuestions.filter((_, i) => !history.includes(i));
  const random = available[Math.floor(Math.random() * available.length)];
  history.push(categoryQuestions.indexOf(random));
  return random;
};

export const isAnswerCorrect = (correctIndex, selectedIndex) => correctIndex === selectedIndex;
