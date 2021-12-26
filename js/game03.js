'use strict';

// 구조 생성
var body = document.body;
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
var chance = document.createElement('div');
var cnt_fail = 0; // 실패 횟수
var cnt_chance = 10; // 도전 횟수
chance.textContent = `도전 기회: ${cnt_chance}`;
body.append(chance);

// 기능 구현
var nums;
var target_nums;

function makeTargetNums() {
  nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  target_nums = [];

  // nums에서 random한 4자리 수를 만들어 target_nums에 담기
  for (var i = 0; i < 4; i++) {
    // splice(idx, length): idx위치부터 length개수만큼 제거 (배열로 반환)
    var random_item = nums.splice(Math.floor(Math.random() * (9 - i)), 1)[0]; // splice(): 배열 반환하므로 첫번째 요소[0] 지정
    target_nums.push(random_item);
  }
}

function autoFocus() {
  input.value = '';
  input.focus();
}

// target_nums 생성하기
makeTargetNums();
console.log(target_nums);

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
    result.textContent = `HOMERUN!!! ${target_nums.join('')} 정답입니다!`;
    autoFocus();
    makeTargetNums();
    cnt_fail = 0; // 틀린 횟수 초기화
    cnt_chance = 10; // 도전 횟수 초기화
    chance.textContent = `도전 기회: ${cnt_chance}`;
  } else {
    // wrong answer
    var answer_num = answer.split('');
    var strike = 0;
    var ball = 0;
    cnt_fail += 1;
    cnt_chance -= 1;
    chance.textContent = `도전 기회: ${cnt_chance}`;

    console.log('입력한 답은: ' + answer);

    if (cnt_fail > 10) {
      // 10번 넘게 틀린 경우
      console.log('기회 소진!!');
      result.textContent = `10번 넘게 틀려서 실패!! 정답은 ${target_nums.join(
        ''
      )}`;
      makeTargetNums();
      cnt_fail = 0; // 틀린 횟수 초기화
      cnt_chance = 10; // 도전 횟수 초기화
      chance.textContent = `도전 기회: ${cnt_chance}`;
    } else {
      // 10번 미만으로 틀린 경우
      console.log('틀림!!');
      for (var i = 0; i < 4; i++) {
        console.log('current idx value: ' + i);
        if (Number(answer_num[i]) === target_nums[i]) {
          // 숫자 o, 자리 o
          console.log('스트라이크: ' + Number(answer_num[i]));
          strike += 1;
        } else if (target_nums.indexOf(Number(answer_num[i])) > -1) {
          // 숫자 o, 자리 x
          // indexOf(): 배열의 idx 반환, 없으면 -1
          console.log('볼: ' + Number(answer_num[i]));
          ball += 1;
        }
      }
      result.textContent = `스트라이크 ${strike} 볼 ${ball}`;
      autoFocus();
    }
  }
});
