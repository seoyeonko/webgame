// 끝말잇기
'use strict';

var body = document.body;
var word = document.createElement('div'); // 제시어
word.textContent = '바나나';
body.append(word);

var form = document.createElement('form');
body.append(form);
var input = document.createElement('input'); // 단어 입력창
form.append(input);
var btn = document.createElement('button'); // 입력 버튼
btn.textContent = '입력';
form.append(btn);
var result = document.createElement('div'); // 끝말잇기 성공 여부 (딩동댕 or 땡)
body.append(result);

// 입력창 자동포커스
function autoFocus() {
  input.value = '';
  input.focus();
}

// 이벤트 리스너로 반복문 역할
btn.addEventListener('click', function (e) {
  e.preventDefault();

  // 글자수 검사
  if (input.value.length <= 1) {
    alert('단어를 두글자 이상 입력해주세요!');
  }

  // 끝말잇기
  if (word.textContent[word.textContent.length - 1] === input.value[0]) {
    result.textContent = '딩동댕';
    word.textContent = input.value; // 제시어 변경
    autoFocus();
  } else {
    result.textContent = '땡';
    autoFocus();
  }
});
