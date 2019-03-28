import State from './state.js';
import Header from './src/header.js';
import Counters from './src/counters.js';
import Buttons from './src/buttons.js';
// import Messages from './src/messages.js'

/* eslint-disable no-loop-func */

console.log(State);

var root = document.querySelector('#root');

// user alert message
// function newMessage(text){
//     State.Alerts.push(`<span>${text}</span>`);
// }


// rendering HTML content
function render(state){
    root.innerHTML = `
    ${Header()}
    ${Buttons(state)}
    ${Counters(state)}
`;
}
render(State);

