const instaBox = document.querySelector(".insta-box");
const fbBox = document.querySelector(".fb-box");
const githubBox = document.querySelector(".github-box");
const twitBox = document.querySelector(".twit-box");
const mailBox = document.querySelector(".mail-box");
const blogBox = document.querySelector(".blog-box");
const rotateBox = document.querySelector("#rotateBox");

function instaHoverHandeler(){
  rotateBox.classList.remove("rotate__box");
  rotateBox.classList.add("rotate__insta-box");
}

function instaOutHandeler(){
  rotateBox.classList.add("rotate__box");
  rotateBox.classList.remove("rotate__insta-box");
}

instaBox.addEventListener("mouseover", instaHoverHandeler);
instaBox.addEventListener("mouseout", instaOutHandeler);