let counterValue = 0;

const btnAdd = document.querySelector(`[data-action="increment"]`)
const btnSub = document.querySelector(`[data-action="decrement"]`)

const counter = document.querySelector("#value")

const increment = () => {
counterValue++;
counter.innerHTML = counterValue;
}

const decrement = () => {
counterValue--;
counter.innerHTML = counterValue;
}

btnAdd.addEventListener("click", increment);
btnSub.addEventListener("click", decrement);
    
