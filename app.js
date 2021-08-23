const boxs = document.querySelectorAll("#box");
const rotateBox = document.querySelector("#rotateBox");

function boxHoverEvent(){
  rotateBox.classList.remove("rotate__box");
}

function boxHoverOutEvent(){
  rotateBox.classList.add("rotate__box");
}

for(let i =0; i < boxs.length; i++){
  function boxHoverEvent(){
    rotateBox.classList.remove("rotate__box");
  }
  
  function boxHoverOutEvent(){
    rotateBox.classList.add("rotate__box");
  }
  boxs[i].addEventListener("mouseover", boxHoverEvent);
  boxs[i].addEventListener("mouseout", boxHoverOutEvent);
}