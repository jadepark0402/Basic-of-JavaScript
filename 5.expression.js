// 함수 선언문 function name() {}
// 함수 표현식 const name = function () {}
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => {}
add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immediately-Invoked Function Expression) : 즉각적으로 호출할 수 있는 함수 표현식
(function run() {
  console.log("😍");
})();
