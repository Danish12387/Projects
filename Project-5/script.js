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
const player2Div = document.querySelector('.player_2');
const youOptionDiv = document.querySelector(".options_div");
const restartBtn = document.getElementById('restart_btn');
const youScores = document.getElementById('you_scores');
const paulScores = document.getElementById('paul_scores');
const quitBtn = document.getElementById('quit_btn');
const popupDiv = document.getElementById('popup_div');
const cancel = document.querySelector('.cancel');
const mainDiv = document.getElementById('main_div');
const okBtn = document.querySelector('.okBtn');
const instructions = document.getElementById('instructions');
const instructinsDiv = document.getElementById('instructions_div');
const startUpperDiv = document.getElementById('start_upper_div');
const instDivBtn = document.getElementById('btn');
let setYouScores = 0;
let setPaulScores = 0;
let youSelectedOption;
let paulSelectedOption;
let IsTrue = false;

quitBtn.addEventListener('click', ()=>{
    popupDiv.style.display = 'block'
    mainDiv.classList.add('main_div')
})

cancel.addEventListener('click', ()=>{
    popupDiv.style.display = 'none'
    mainDiv.classList.remove('main_div')
})

okBtn.addEventListener('click', ()=>{
    startDiv.style.display = 'flex'
    dashboard.style.display = 'none'
    mainDiv.classList.remove('main_div')
    popupDiv.style.display = 'none'
})

instructions.addEventListener('click', ()=>{
    instructinsDiv.style.display = 'block'
    startUpperDiv.style.display = 'none'
})

instDivBtn.addEventListener('click', ()=>{
    instructinsDiv.style.display = 'none'
    startUpperDiv.style.display = 'block'
})

startBtn.addEventListener('click', () => {
    startDiv.style.display = 'none'
    dashboard.style.display = 'flex'
    mainDiv.style.display = 'block'
})

const arr = [option1, option2, option3];

function player2() {
    arr.forEach(item => {
        item.classList.remove('transform');
    })
    const randomNum = Math.ceil(Math.random() * 3);
    arr[randomNum - 1].classList.add('transform');
    paulSelectedOption = arr[randomNum - 1].innerHTML;
}

restartBtn.addEventListener('click', () => {
    if (IsTrue) {
        youOptionDiv.style.display = 'flex';
        player2Div.style.display = 'none';
        suggestion.innerHTML = 'Select one of them!'
        game();
        IsTrue = false;
    }
})

function game() {

    for (let i = 0; i < options.length; i++) {

        options[i].classList.remove('transform');
        options[i].classList.add('transformIs');
        options[i].style.cursor = 'pointer'

        options[i].addEventListener('click', () => {

            for (let i = 0; i < options.length; i++) {
                options[i].classList.remove('transform');
                options[i].classList.remove('transformIs');
                options[i].style.cursor = 'not-allowed'
            }

            options[i].classList.add('transform');
            youSelectedOption = options[i].innerHTML;
            console.log(youSelectedOption);
            suggestion.innerHTML = 'Good!'

            setTimeout(() => {
                arr.forEach(item => {
                    item.classList.remove('transform');
                })

                suggestion.innerHTML = "Now Paul's Turn!"
                youOptionDiv.style.display = 'none';
                player2Div.style.display = 'flex';

            }, 1000);

            setTimeout(() => {
                suggestion.innerHTML = "Paul is choosing!"
            }, 2000);

            setTimeout(() => {
                player2()
            }, 3000);

            setTimeout(() => {
                if (paulSelectedOption === youSelectedOption) {
                    suggestion.innerHTML = "Tie!"
                }

                if (paulSelectedOption === 'PAPER' && youSelectedOption === 'ROCK') {
                    suggestion.innerHTML = 'No Winner!'
                }
                
                if (paulSelectedOption === 'ROCK' && youSelectedOption === 'PAPER') {
                    suggestion.innerHTML = 'No Winner!'
                }

                if (paulSelectedOption === 'SCISSOR' && youSelectedOption === 'ROCK') {
                    suggestion.innerHTML = 'You Win!'
                    setYouScores++
                    youScores.innerHTML = setYouScores;
                }

                if (paulSelectedOption === 'ROCK' && youSelectedOption === 'SCISSOR') {
                    suggestion.innerHTML = 'Paul Win!'
                    setPaulScores++
                    paulScores.innerHTML = setPaulScores;
                }

                if (paulSelectedOption === 'PAPER' && youSelectedOption === 'SCISSOR') {
                    suggestion.innerHTML = 'You Win!'
                    setYouScores++
                    youScores.innerHTML = setYouScores;
                }

                if (paulSelectedOption === 'SCISSOR' && youSelectedOption === 'PAPER') {
                    suggestion.innerHTML = 'Paul Win!'
                    setPaulScores++
                    paulScores.innerHTML = setPaulScores;
                }
            }, 4000);
        })

            setTimeout(() => {
                IsTrue = true;
            }, 5000);
    }
}

game();