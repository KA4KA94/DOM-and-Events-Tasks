function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');
// console.log("colorEl", colorEl.textContent)
// console.log("bodyEl", bodyEl)
// console.log("buttonEl", buttonEl)

buttonEl.addEventListener('click', () => {
  // console.log(bodyEl.style.background = 'black')
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`
})








// function getRandomHexColor() {
//   return console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
// }

// getRandomHexColor()