// while(조건) {}
// 조건이 false가 될때까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

// 조건이 참일 경우에 쓰고 싶다면 while
let isActive = true;
let i = 0;
while (isActive) {
  console.log("아직살아있다!");
  if (i === 1000) {
    break;
  }
  i++;
}

// 조건을 한 번이라도 사용해야 하는 경우 do-while
do {
  console.log("do-while 아직살아있다!");
} while (isActive);
