import * as State from './state';
import Header from './src/header.js';
import Counters from './src/counters.js';
import Buttons from './src/buttons.js';
import Messages from './src/messages.js'
import gameLoop from './src/game-loop.js'

/* eslint-disable no-loop-func */

console.log(State);

var root = document.querySelector('#root');

// user alert message
function newMessage(text){
    State.Alerts.push(`<span>${text}</span>`);
}

function handleButtons(event){
    let buttonID = event.target.id;

    // pass buttonID into state and apply the useButton() function
    State.Buttons[buttonID].useButton();

    render(State);

}

gameLoop(State);

// rendering HTML content
export default function render(state){
    root.innerHTML = `
    ${Header()}
    ${Buttons(state)}
    ${Counters(state)}
    ${Messages(state)}
    `;

    let buttons = document.querySelectorAll('.button');
    buttons.forEach(
        (element)=>{
            element.addEventListener('click', handleButtons)
        }
    )

}
render(State);

