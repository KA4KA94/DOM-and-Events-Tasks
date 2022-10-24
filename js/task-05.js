let inputEl = document.querySelector('#name-input');
let outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
    outputEl.textContent = event.currentTarget.value;
    // console.log(outputEl.textContent);
    
    if (event.currentTarget.value === '') {
        outputEl.textContent = 'Anonymous'
    }
    // console.log(event.currentTarget.value)
})




// const inputEl = document.querySelector('#name-input');
// const spanEl = document.querySelector('#name-output');

// inputEl.addEventListener('input', handlInputEvent);

// inputEl.addEventListener('blur', handelBlurEvent);

// function handlInputEvent(event) {
//     spanEl.textContent = event.currentTarget.value;
//     console.log(event)
// }

// function handelBlurEvent(event) {
//     if (event.currentTarget.value === '')
//         spanEl.textContent = 'Anonymus';
// }