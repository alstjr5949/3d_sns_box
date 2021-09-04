const instaBox = document.querySelector(".insta-box");
const instaIcon = document.querySelector(".insta-box span");
const fbBox = document.querySelector(".fb-box");
const githubBox = document.querySelector(".github-box");
const twitBox = document.querySelector(".twit-box");
const mailBox = document.querySelector(".mail-box");
const blogBox = document.querySelector(".blog-box");
const rotateBox = document.querySelector("#rotateBox");
const rotateTrans = 30000;

function rotate() {
  rotateBox.style.transform = "rotate3d(1, 1, 1, 360deg)";
  rotateBox.style.transition = `${rotateTrans}ms linear`;
}

//처음 시작했을 때 rotate 진행

rotate();

//setInterval 함수를 리턴하는 함수 생성\
//setInterval로 30초에 한번식 rotate함수를 리턴하여 클릭하지 않았을 때도 계속 회전하도록 만듬
const repeat = () => {
  const repeat = setInterval(rotate, 300);
  return repeat;
};

//setInterval 함수 실행
let timing = repeat(); //repeat리턴 값을 받아 timing = setInterval(rotate, rotateTrans); 이 됨

//timing이라는 이름을 가진  setInterval 함수를 멈추는 함수 생성
const stopRepeat = () => {
  clearInterval(timing);
};

function onClick() {
  const transition = 300;
  //원점으로 돌아감, 기존의 rotate함수는 실행시 style을 변경하는 방식이라 다른 style 적용시에 덮어씌어져 무의미해짐
  rotateBox.style.transform = "rotate3d(0, 0, 0, 0deg)";
  rotateBox.style.transition = `${transition}ms linear`;
  //따라서 원점으로 돌아가는 시간을 기다렸다가 다시 rotate 실행
  setTimeout(rotate, transition);
  //이후 interval을 멈추고
  stopRepeat();
  //timing를 새로 설정함으로써 setInterval함수를 다시 실행하는 효과를 만듬 , ==>결론적으로 처음 상황 돌아감
  timing = repeat();
}

instaBox.addEventListener("click", onClick);