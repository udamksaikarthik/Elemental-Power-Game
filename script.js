let userChoice = ''
let userScore = 0
let computerScore = 0
let resultText = ''

const image_game_icon_id = document.getElementById('image_game_icon_id')

const image_game_icon_width = image_game_icon_id.offsetWidth;

const image_game_icon_height = image_game_icon_id.offsetHeight;



if(window.innerHeight > window.innerWidth){
    console.log('image_game_icon_width: ',image_game_icon_width)

    image_game_icon_id.style.height = image_game_icon_width + 'px'
}else{
    console.log('image_game_icon_height: ',image_game_icon_height)

    image_game_icon_id.style.width = image_game_icon_height + 'px'
}

// Images rendered

const user_selected_element_image_id = document.getElementById('user_selected_element_image_id')
const user_selected_element_name_id = document.getElementById('user_selected_element_name_id')
const flame_bg_effect_id = document.getElementById('flame_bg_effect_id')
const water_bg_effect_id = document.getElementById('water_bg_effect_id')
const wind_bg_effect_id = document.getElementById('wind_bg_effect_id')
const earth_bg_effect_id = document.getElementById('earth_bg_effect_id')
const lightning_bg_effect_id = document.getElementById('lightning_bg_effect_id')
const black_bg_effect_div_id = document.getElementById('black_bg_effect_div_id')

function commonAnimateUserChoice(userSelectedChoice){
    
    switch(userSelectedChoice){
        case ('Fire'):
            user_selected_element_image_id.classList.remove('choice_user_waves')
            user_selected_element_image_id.classList.remove('choice_user_wind')
            user_selected_element_image_id.classList.remove('choice_user_earth')
            user_selected_element_image_id.classList.remove('choice_user_lightning')
            user_selected_element_image_id.classList.add('choice_user_flames')
            flame_bg_effect_id.classList.add('add')
            black_bg_effect_div_id.classList.add('fade')
            user_selected_element_name_id.innerText = userSelectedChoice
            userChoice = userSelectedChoice
            break
        case ('Water'):
            user_selected_element_image_id.classList.remove('choice_user_flames')
            user_selected_element_image_id.classList.remove('choice_user_wind')
            user_selected_element_image_id.classList.remove('choice_user_earth')
            user_selected_element_image_id.classList.remove('choice_user_lightning')
            user_selected_element_image_id.classList.add('choice_user_waves')
            water_bg_effect_id.classList.add('add')
            black_bg_effect_div_id.classList.add('fade')
            user_selected_element_name_id.innerText = userSelectedChoice
            userChoice = userSelectedChoice
            break
        case ('Wind'):
            user_selected_element_image_id.classList.remove('choice_user_waves')
            user_selected_element_image_id.classList.remove('choice_user_flames')
            user_selected_element_image_id.classList.remove('choice_user_earth')
            user_selected_element_image_id.classList.remove('choice_user_lightning')
            user_selected_element_image_id.classList.add('choice_user_wind')
            wind_bg_effect_id.classList.add('add')
            black_bg_effect_div_id.classList.add('fade')
            user_selected_element_name_id.innerText = userSelectedChoice
            userChoice = userSelectedChoice
            break
        case ('Earth'):
            user_selected_element_image_id.classList.remove('choice_user_waves')
            user_selected_element_image_id.classList.remove('choice_user_wind')
            user_selected_element_image_id.classList.remove('choice_user_flames')
            user_selected_element_image_id.classList.remove('choice_user_lightning')
            user_selected_element_image_id.classList.add('choice_user_earth')
            earth_bg_effect_id.classList.add('add')
            black_bg_effect_div_id.classList.add('fade')
            user_selected_element_name_id.innerText = userSelectedChoice
            userChoice = userSelectedChoice
            break
        case ('Lightning'):
            user_selected_element_image_id.classList.remove('choice_user_waves')
            user_selected_element_image_id.classList.remove('choice_user_wind')
            user_selected_element_image_id.classList.remove('choice_user_earth')
            user_selected_element_image_id.classList.remove('choice_user_flames')
            user_selected_element_image_id.classList.add('choice_user_lightning')
            lightning_bg_effect_id.classList.add('add')
            black_bg_effect_div_id.classList.add('fade')
            user_selected_element_name_id.innerText = userSelectedChoice
            userChoice = userSelectedChoice
            break
    }
}

const flame_com_bg_effect_id = document.getElementById('flame_com_bg_effect_id')
const water_com_bg_effect_id = document.getElementById('water_com_bg_effect_id')
const wind_com_bg_effect_id = document.getElementById('wind_com_bg_effect_id')
const earth_com_bg_effect_id = document.getElementById('earth_com_bg_effect_id')
const lightning_com_bg_effect_id = document.getElementById('lightning_com_bg_effect_id')
const black_com_bg_effect_div_id = document.getElementById('black_com_bg_effect_div_id')

function commonAnimateComputerChoice(computerChoice){
    switch(computerChoice){
        case 'Fire':
            flame_com_bg_effect_id.classList.add('add')
            black_com_bg_effect_div_id.classList.add('fade')
            break
        case ('Water'):
            water_com_bg_effect_id.classList.add('add')
            black_com_bg_effect_div_id.classList.add('fade')
            break
        case ('Wind'):
            wind_com_bg_effect_id.classList.add('add')
            black_com_bg_effect_div_id.classList.add('fade')
            break
        case ('Earth'):
            earth_com_bg_effect_id.classList.add('add')
            black_com_bg_effect_div_id.classList.add('fade')
            break
        case ('Lightning'):
            lightning_com_bg_effect_id.classList.add('add')
            black_com_bg_effect_div_id.classList.add('fade')
            break
    }
}


function removeUserChoice(){
    setTimeout(function(){
        flame_bg_effect_id.classList.remove('add')
        water_bg_effect_id.classList.remove('add')
        wind_bg_effect_id.classList.remove('add')
        earth_bg_effect_id.classList.remove('add')
        lightning_bg_effect_id.classList.remove('add')
        black_bg_effect_div_id.classList.remove('fade')
    },700)
}


function removeComputerChoice(){
    setTimeout(function(){
        flame_com_bg_effect_id.classList.remove('add')
        water_com_bg_effect_id.classList.remove('add')
        wind_com_bg_effect_id.classList.remove('add')
        earth_com_bg_effect_id.classList.remove('add')
        lightning_com_bg_effect_id.classList.remove('add')
        black_com_bg_effect_div_id.classList.remove('fade')
    },700)
}

function userSelectedChoice(userSelectedChoice){
    console.log('userSelectedChoice: ',userSelectedChoice)

        commonAnimateUserChoice(userSelectedChoice)
        removeUserChoice()
}


// Rules Slider

const rules_container_div_id = document.getElementById('rules_container_div_id')


function rulesSlider(){
    rules_container_div_id.classList.toggle('add')
}

// Play Game

const play_button_id = document.getElementById('play_button_id')

const user_score_id = document.getElementById('user_score_id')

const computer_score_id = document.getElementById('computer_score_id')

const result_winner_div_container_id = document.getElementById('result_winner_div_container_id')

const round_winner_text_id = document.getElementById('round_winner_text_id')

const computer_choices = ['Fire','Water','Wind','Earth','Lightning']

let count = 0;

function playGame(){
    if(count%2===0){
        
        commonAnimateUserChoice(userChoice)
        console.log('userChoice: ',userChoice)
        const randomNumber = Math.floor(Math.random()* computer_choices.length)
        console.log('randomNumber: ',randomNumber)
        const computerChoice = computer_choices[randomNumber]
        console.log('computerChoice: ',computerChoice)
        commonAnimateComputerChoice(computerChoice)
        if(userChoice === computerChoice){
            console.log('DRAW!')
            resultText = 'Draw!'
        }
        else if(userChoice === 'Fire' && computerChoice === 'Wind'){
            console.log('You Won')
            resultText = 'You Won!'
            userScore++;
        }
        else if(userChoice === 'Wind' && computerChoice === 'Lightning'){
            console.log('You Won')
            resultText = 'You Won!'
            userScore++;
        }
        else if(userChoice === 'Lightning' && computerChoice === 'Earth'){
            console.log('You Won')
            resultText = 'You Won!'
            userScore++;
        }
        else if(userChoice === 'Earth' && computerChoice === 'Water'){
            console.log('You Won')
            resultText = 'You Won!'
            userScore++;
        }
        else if(userChoice === 'Water' && computerChoice === 'Fire'){
            console.log('You Won')
            resultText = 'You Won!'
            userScore++;
        }
        else if(computerChoice === 'Fire' && userChoice === 'Wind'){
            console.log('Computer Won')
            resultText = 'Computer Won!'
            computerScore++;
        }
        else if(computerChoice === 'Wind' && userChoice === 'Lightning'){
            console.log('Computer Won')
            resultText = 'Computer Won!'
            computerScore++;
        }
        else if(computerChoice === 'Lightning' && userChoice === 'Earth'){
            console.log('Computer Won')
            resultText = 'Computer Won!'
            computerScore++;
        }
        else if(computerChoice === 'Earth' && userChoice === 'Water'){
            console.log('Computer Won')
            resultText = 'Computer Won!'
            computerScore++;
        }
        else if(computerChoice === 'Water' && userChoice === 'Fire'){
            console.log('Computer Won')
            resultText = 'Computer Won!'
            computerScore++;
        }
        else{
            console.log('Partial Damage')
            resultText = 'Partial Damage!'
            computerScore+= 0.5
            userScore+=0.5
        }
        play_button_id.innerText = 'Play Again'
        user_score_id.innerText = userScore
        computer_score_id.innerText = computerScore
        result_winner_div_container_id.classList.add('add')
        round_winner_text_id.innerText = resultText
        count++;
    }else{
        removeUserChoice()
        removeComputerChoice()
        result_winner_div_container_id.classList.remove('add')
        play_button_id.innerText = 'Play'
        count++;
    }
}

