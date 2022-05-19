function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeButton = document.querySelector(".change-color")
const bgColor = document.querySelector(".color");
const body = document.querySelector("body");

changeButton.addEventListener("click", changeColor);

function changeColor (){
  body.style.backgroundColor = getRandomHexColor();
  bgColor.textContent = getRandomHexColor();
}