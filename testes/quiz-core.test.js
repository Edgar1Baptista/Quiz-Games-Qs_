import { test,      assert } from 'poku';
import { getRandomQuestion, isAnswerCorrect, resertTimerState } from '../javascripts/quiz/quiz-core.js';

test('resertTimerState deve retornar tempo padrão e null para timer', () => {
  const timer = resertTimerState();
  assert(timer.currentTime === 15, 'Tempo padrão deve ser 15');
  assert(timer.timer === null, 'Timer deve ser null');
});

test('isAnswerCorrect deve retornar verdadeiro se índice correto for selecionado', () => {
  assert(isAnswerCorrect(2, 2) === true, 'Índice correto deve retornar true');
  assert(isAnswerCorrect(1, 3) === false, 'Índice incorreto deve retornar false');
});

test('getRandomQuestion retorna uma questão aleatória não repetida', () => {
  const fakeQuestions = [
    { question: 'Q1', correctAnswer: 0 },
    { question: 'Q2', correctAnswer: 1 },
    { question: 'Q3', correctAnswer: 2 },
  ];
  const history = [];
  const q = getRandomQuestion(fakeQuestions, history, 3);
  assert(q != null, 'A questão aleatória deve ser retornada');
  assert(history.length === 1, 'O histórico deve conter uma entrada');
});