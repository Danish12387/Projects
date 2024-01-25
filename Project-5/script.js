const startDiv = document.querySelector('.start_main');
const startBtn = document.getElementById('start_btn');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const suggestion = document.getElementById('suggestion');
const options = document.getElementsByClassName('options');
const dashboard = document.querySelector('.dashboard')
const option1 = document.getElementById('option_1');
const option2 = document.getElementById('option_2');
const option3 = document.getElementById('option_3');
let selectedOption;


startBtn.addEventListener('click', () => {
    startDiv.style.display = 'none'
    dashboard.style.display = 'block'
})

function player2() {
    const randomNum = Math.ceil(Math.random() * 3);
    const arr = [option1, option2, option3];
    arr[randomNum - 1].classList.add('transform');
    console.log(randomNum);
}
player2()

for (let i = 0; i < options.length; i++) {

    options[i].addEventListener('click', () => {
        for (let i = 0; i < options.length; i++) {
            options[i].classList.remove('transform');
            options[i].classList.remove('transformIs');
            options[i].style.cursor = 'not-allowed'
        }
        options[i].classList.add('transform');
        selectedOption = options[i].innerHTML
        suggestion.innerHTML = 'Good!'
        setTimeout(() => {
            suggestion.innerHTML = "Now Player 2's Turn!"
        }, 2400);
    })
}