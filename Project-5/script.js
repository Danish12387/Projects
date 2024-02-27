const startDiv = document.querySelector('.start_main');
const startBtn = document.getElementById('start_btn');
const suggestion = document.getElementById('suggestion');
const options = document.getElementsByClassName('options');
const dashboard = document.querySelector('.dashboard')
const option1 = document.getElementById('option_1');
const option2 = document.getElementById('option_2');
const option3 = document.getElementById('option_3');
const player2Div = document.querySelector('.player_2');
const myOptionDiv = document.querySelector(".options_div");
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
const playAgainSug = document.getElementById('play_again_sug');
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')
let setYouScores = 0;
let setPaulScores = 0;
let youSelectedOption;
let paulSelectedOption;
let IsTrue = false;

quitBtn.addEventListener('click', () => {
    popupDiv.style.display = 'block'
    mainDiv.classList.add('main_div')
})

cancel.addEventListener('click', () => {
    popupDiv.style.display = 'none'
    mainDiv.classList.remove('main_div')
})

okBtn.addEventListener('click', () => {
    startDiv.style.display = 'flex'
    dashboard.style.display = 'none'
    mainDiv.classList.remove('main_div')
    popupDiv.style.display = 'none'
})

instructions.addEventListener('click', () => {
    instructinsDiv.style.display = 'block'
    startUpperDiv.style.display = 'none'
})

instDivBtn.addEventListener('click', () => {
    instructinsDiv.style.display = 'none'
    startUpperDiv.style.display = 'block'
})

startBtn.addEventListener('click', () => {
    startDiv.style.display = 'none'
    dashboard.style.display = 'flex'
    mainDiv.style.display = 'block'
})

restartBtn.addEventListener('click', () => {
    if (IsTrue) {
        myOptionDiv.style.display = 'flex';
        player2Div.style.display = 'none';
        suggestion.innerHTML = 'Make your move!'
        playAgainSug.style.display = 'none'

        for (let i = 0; i < options.length; i++) {
            options[i].classList.remove('transform');
            options[i].classList.add('transformIs');
            options[i].style.cursor = 'pointer'
        }
        rock.addEventListener('click', clickHandler);
        paper.addEventListener('click', clickHandler);
        scissor.addEventListener('click', clickHandler);
        IsTrue = false;
    }
})

const arr = [option1, option2, option3];
const choices = ['R', 'P', 'S'];

function player2(choice) {
    arr.forEach(item => {
        item.classList.remove('transform');
    })
    // const randomNum = Math.floor(Math.random() * 3);
    let randomNum = null;

    while(true){
        randomNum = Math.floor(Math.random() * 3);
        if(choice !== choices[randomNum]) {
            break;  
        }
    }

    arr[randomNum].classList.add('transform');
    paulSelectedOption = choices[randomNum];
}

const clickHandler = (event, choice) => {
    const selectedOption = event.target;
    game(selectedOption, choice);
};


rock.addEventListener('click', (e) => {
    clickHandler(e, 'R')
});

paper.addEventListener('click', (e) => {
    clickHandler(e, 'P')
});

scissor.addEventListener('click', (e) => {
    clickHandler(e, 'S')
});

function game(selectedOption, choice) {
    rock.removeEventListener('click', clickHandler);
    paper.removeEventListener('click', clickHandler);
    scissor.removeEventListener('click', clickHandler);

    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('transform');
        options[i].classList.remove('transformIs');
        options[i].style.cursor = 'not-allowed'
    }

    selectedOption.classList.add('transform');
    youSelectedOption = choice;
    suggestion.innerHTML = 'Good!'

    setTimeout(() => {
        arr.forEach(item => {
            item.classList.remove('transform');
        })

        suggestion.innerHTML = "Now Paul's Turn!"
        myOptionDiv.style.display = 'none';
        player2Div.style.display = 'flex';

    }, 1000);

    setTimeout(() => {
        suggestion.innerHTML = "Paul is choosing!"
    }, 2000);

    setTimeout(() => {
        player2(choice)
    }, 3000);

    setTimeout(() => {
        checkWinner()
    }, 4000);

    setTimeout(() => {
        IsTrue = true;
    }, 5000);

}

function win() {
    suggestion.innerHTML = 'You Win!'
    setYouScores++
    youScores.innerHTML = setYouScores;
    playAgainSug.style.display = 'block'
}

function lose() {
    suggestion.innerHTML = 'Paul Win!'
    setPaulScores++
    paulScores.innerHTML = setPaulScores;
    playAgainSug.style.display = 'block'
}

function draw() {
    suggestion.innerHTML = "Tie!"
    playAgainSug.style.display = 'block'
}

function checkWinner() {

    switch (youSelectedOption + paulSelectedOption) {
        case 'RS':
        case 'PR':
        case 'SP':
            win()
            break;
        case 'RP':
        case 'PS':
        case 'SR':
            lose()
            break;
        case 'RR':
        case 'PP':
        case 'SS':
            draw()
            break;
    }

}