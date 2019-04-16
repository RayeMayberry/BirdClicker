import * as State from './state';
import Header from './src/header.js';
import Timer from './src/timer.js';
import Counters from './src/counters.js';
import Messages from './src/messages.js'
import gameLoop from './src/game-loop.js'
import Canvas from './src/canvas.js'

/* eslint-disable no-loop-func */

console.log(State);

var root = document.querySelector('#root');

function handleButtons(event){
    let buttonID = event.target.id;

    // pass buttonID into state and apply the useButton() function
    State.Buttons[buttonID].useButton();

    render(State);

}

gameLoop(State);

// rendering HTML content
export default function render(){
    

}
render(State);

