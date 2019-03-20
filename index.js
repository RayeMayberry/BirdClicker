/* eslint-disable no-loop-func */

var root = document.querySelector('#root');

var State = {
    'Resources' : {
        'Birds' : null,
        'Birdseed': 100,
        'Trinkets' : null,

    },

    Incrementors : {
        'Birdfeeder-Small' : {
            amount: null,
            capacity: 0.0, //0-1 scale
        } // increase capacity on click, 
    },

    Clickers: {
        'scatterBirdseed': {
            'name': 'Scatter some birdseed',
            'buy': 'Trinkets', // resource to buy
            'buyCount': 1, // how many?
            'spend': 'Birdseed', // resource to spend
            'spendCount': 10, // how many?
            'successMessage': 'A bird ate some birdseed and flew away, leaving you 1 trinket. &#10024;',
            'errorMessage': 'Not enough birdseed'
        },
        'buyBirdseed': {
            'name': 'Buy more birdseed',
            'buy': 'Birdseed',
            'buyCount': 10,
            'spend': 'Trinkets',
            'spendCount': 1,
            'successMessage': null,
            'errorMessage': 'Not enough trinkets'
        },
        'smallBirdfeeder': {
            'name': 'x1 Small Birdfeeder',
            'buy': 'Birdfeeder-Small',
            'buyCount': 1,
            'spend': 'Trinkets',
            'spendCount': 4,
            'successMessage': null,
            'errorMessage': 'Not enough trinkets'
        },
    },

    'Alerts': [
        '<span>Welcome to your Bird Clicker garden. Scatter some seed for the birds to begin.</span>'
    ]
};

// Header component
function Header(){
    return `
        <header>Bird Clicker: a Game of Avian Iteration</header>
    `;
}

// Counters component
function Counters(state){
    var output = '<div id="resources" class="column">';

    for(const [ key, value ] of Object.entries(state.Resources)){
        if(value !== null){
            output += `<span id="${key}">${key}: ${value}</span>`;
        }
    }

    output += '</div>';

    return output;
}

// Buttons component
function Buttons(state){
    var output = '<div id="clickers" class="column">';

    for(const [ key, value ] of Object.entries(state.Clickers)){
        if(state.Resources[value.spend] >= value.spendCount){
            output += `<span id="${key}" class="button">${value.name}</span>`;
        }
    }
    
    output += '</div>';
    
    return output;
}

// Messages
function Messages(state){
    return `<div id="messages" class="column">${state.Alerts.join(' ')}</div>`;
}
// user alert message
function newMessage(text){
    State.Alerts.push(`<span>${text}</span>`);
}

// game loop
setInterval(() => {
    // conditionals for birdfeeder being full
    
}, 1000);// 1000 miliseconds = 1 second

// rendering HTML content
function render(state){
    root.innerHTML = `
    ${Header()}
    ${Counters(State)}
    ${Buttons(State)}
    ${Messages(State)}
`;
    
    for(const [ key, value ] of Object.entries(state.Clickers)){
        let button = document.querySelector(`#${key}`);

        if(button){
            button.addEventListener('click', (event) => {
                if(state.Resources[`${value.spend}`] >= value.spendCount){
                    state.Resources[`${value.buy}`] += value.buyCount;
                    state.Resources[`${value.spend}`] -= value.spendCount;
            
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
render(State);

