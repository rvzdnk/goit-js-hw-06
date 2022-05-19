const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")

ingredients.forEach( (ingredient) =>{
  let createLi = document.createElement("li");
createLi.classList.add("item")
  createLi.textContent = ingredient;
  list.appendChild(createLi);
}
  )

  
