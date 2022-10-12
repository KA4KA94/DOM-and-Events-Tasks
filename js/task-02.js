const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const element = document.querySelector('ul')
console.log(element)

const createList = document.createElement('li')
// console.log(createList)

createList.classList.add('item')

element.append(createList)

for (let i = 0; i < ingredients.length; i++) {
  createList.textContent = ingredients[0]
  
}




