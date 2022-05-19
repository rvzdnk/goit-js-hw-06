function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector(`#boxes`)
const inputAmount = document.querySelector(`[type="number"]`)
const createBtn = document.querySelector(`[data-create]`)
const destroyBtn = document.querySelector('[data-destroy]')

createBtn.addEventListener("click", createBoxes)
destroyBtn.addEventListener("click", destroyBoxes)

let startingSize = 30;
let step = 10;

function createBoxes (amount){
  amount = inputAmount.value;
  const array = [];

  for (let i=1; i<=amount; i++){
    const newDiv = document.createElement("div")
    newDiv.style.backgroundColor = getRandomHexColor();
    
    newDiv.style.width = `${startingSize + step}px`;
    newDiv.style.height = `${startingSize + step}px`;

    step+=10;

    array.push(newDiv)
  }
  boxes.append(...array)
}

function destroyBoxes (){
  boxes.innerHTML =``;
  inputAmount.value =``;
}
