import State from './state.js';
import Header from './src/header.js';
import Counters from './src/counters.js';
import Buttons from './src/buttons.js';
import Messages from './src/messages.js'

/* eslint-disable no-loop-func */

var root = document.querySelector('#root');

// user alert message
function newMessage(text){
    State.Alerts.push(`<span>${text}</span>`);
}

// game loop
setInterval(() => {
    if(State.Resources.Birdfeeder.amount && State.Resources.Birdfeeder.capacity > 0 ){
        State.Resources.Birds.amount ++;
        State.Resources.Birdfeeder.capacity --;
    }
    if(State.Resources.Birds.amount > 0){
        State.Resources.Birds.amount --;
        State.Resources.Trinkets.amount ++;
    }
    if (State.Resources.Birdfeeder.capacity === 0) {
        newMessage("Birdfeeder is empty");
        State.Resources.Birdfeeder.capacity = null;
    }
    
    render(State)
}, 1000);// 1000 miliseconds = 1 second


function manageResources(state){
    for(const [ key, value ] of Object.entries(state.Clickers)){
        let button = document.querySelector(`#${key}`);

        if(button){
            button.addEventListener('click', (event) => {
                if(state.Resources[value.spend].amount >= value.spendCount){
                    state.Resources[value.buy].amount += value.buyCount;
                    state.Resources[value.spend].amount -= value.spendCount;
            
                    if(value.successMessage){
                        newMessage(`${value.successMessage}`);
                    }
                }
                else if(value.spend === undefined){
                    state.Resources[value.buy].amount += value.buyCount;
                    if(value.successMessage){
                        newMessage(`${value.successMessage}`);
                    }
                }
                else{
                    newMessage(`${value.errorMessage}`);
                }
                render(State);
            });
        }
    }
}

// rendering HTML content
function render(state){
    root.innerHTML = `
    ${Header()}
    ${Counters(state)}
    ${Buttons(state)}
    ${Messages(state)}
`;

    manageResources(state);
}
render(State);

