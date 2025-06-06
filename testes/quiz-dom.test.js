// testes/quiz-dom.test.js

import { JSDOM } from 'jsdom';

// 1. Inicializa o JSDOM primeiro
const dom = new JSDOM(`
  <div class="timer-duration"></div>
  <ul class="answer-options"></ul>
`);
global.document = dom.window.document;
global.window = dom.window;


console.log(global)

// 2. Só depois importa o módulo que usa `document`
import { updateTimerDisplay, clearOptions, renderOptions } from '../javascripts/quiz/quiz-dom.js';
import { test } from 'poku';
import assert from 'node:assert/strict';

// 3. Os testes
test('updateTimerDisplay deve atualizar o texto do cronômetro', (t) => {
  updateTimerDisplay(10);
  const value = document.querySelector('.timer-duration').textContent;
  assert.equal(value, '10s');
});

test('clearOptions deve limpar todas opções anteriores', (t) => {
  const el = document.querySelector('.answer-options');
  el.innerHTML = '<li>Fake</li>';
  clearOptions();
  assert.equal(el.children.length, 0);
});

test('renderOptions deve adicionar elementos corretamente', (t) => {
  const el = document.querySelector('.answer-options');
  renderOptions(['A', 'B'], () => {});
  assert.equal(el.children.length, 2);
  assert.equal(el.children[0].textContent, 'A');
});
