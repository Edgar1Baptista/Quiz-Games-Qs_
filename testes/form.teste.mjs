import { soma } from './form.js';

test('soma dois números', () => {
  assert(soma(2, 3) === 5);
});

test('soma com zero', () => {
  assert(soma(0, 10) === 10);
});
