'use strict';

var body = document.body;

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var target_nums = [];

// nums에서 random한 4자리 수를 만들어 numArray에 담기
for (var i = 0; i < 4; i++) {
  // pop(): 배열의 마지막 원소 제거
  // push(): 배열의 마지막 위치에 원소 추가
  // var ramdom_item = nums.pop();
  // target_nums.push(ramdom_item);

  // shift(): 배열의 첫번째 원소 제거
  // unshift(): 배열의 첫번째 위치에 원소 추가
  // var ramdom_item = nums.shift();
  // target_nums.unshift(ramdom_item);

  // splice(idx, length): idx위치부터 length개수만큼 제거 (배열로 반환)
  var idx = Math.floor(Math.random() * (9 - i)); // 0 ~ 8-i(max)
  var random_item = nums.splice(idx, 1)[0]; // splice(): 배열 반환하므로 첫번째 요소[0] 지정
  target_nums.push(random_item);
}
console.log(target_nums);

var result = document.createElement('h1');
body.append(result);
var form = document.createElement('form');
body.append(form);
var input = document.createElement('input');
input.type = 'number';
input.maxLength = 4;
form.append(input);
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);

// form > input; enter 입력시 submit event 발생
form.addEventListener('submit', function (e) {
  e.preventDefault(); // submit event의 새로고침 현상 막음

  var answer = input.value;
  console.log(answer, target_nums.join(''));
  console.log(answer, target_nums, answer === target_nums.join(''));

  // join(sep): 배열의 모든 요소를 연결해 하나의 문자열로 만듦
  // split(sep): String 객체를 구분자를 이용해 여러개의 문자열로 나눔
  if (answer === target_nums.join('')) {
    // correct answer
    result.textContent = 'HOMERUN!!!';
    input.value = ''; // 입력창 초기화
    input.focus();
  } else {
    // wrong answer
  }
});
