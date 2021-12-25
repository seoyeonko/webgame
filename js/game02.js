// 구구단
'use strict';

var num1 = Math.ceil(Math.random() * 9);
var num2 = Math.ceil(Math.random() * 9);
var answer = num1 * num2;

var body = document.body;

var score_plus = document.createElement('div');
var score_minus = document.createElement('div');
var correct = 0;
var wrong = 0;
score_plus.textContent = correct;
score_minus.textContent = wrong;
body.append(score_plus);
body.append(score_minus);

var word = document.createElement('div');
word.textContent = `${String(num1)} x ${String(num2)} =`;
body.append(word);

var form = document.createElement('form');
body.append(form);
var input = document.createElement('input');
input.setAttribute('type', 'number');
form.append(input);
var btn = document.createElement('button');
btn.textContent = '입력';
form.append(btn);
var result = document.createElement('div');
body.append(result);

// 입력창 자동포커스
function autoFocus() {
  input.value = '';
  input.focus();
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (answer === Number(input.value)) {
    result.textContent = '딩동댕';
    correct += 1;
    score_plus.textContent = correct;
    num1 = Math.ceil(Math.random() * 9);
    num2 = Math.ceil(Math.random() * 9);
    answer = num1 * num2;
    word.textContent = String(num1) + ' x ' + String(num2) + ' =';
    autoFocus();
  } else {
    result.textContent = '땡';
    wrong += 1;
    score_minus.textContent = wrong;
    autoFocus();
  }
});
