/* eslint-disable no-loop-func */

var root = document.querySelector('#root');

var Resources = {
    'Birds': 0,
    'Birdseed': 100,
    'Trinkets': 0,
    'Small Birdfeeder': 0
};

var Clickers = {
    'scatterBirdseed': {
        'name': 'Scatter some birdseed',
        'buy': 'Trinkets', // resource to buy
        'buyCount': 1, // how many?
        'spend': 'Birdseed', // resource to spend
        'spendCount': 10, // how many?
        'successMessage': 'A bird ate some birdseed and flew away, leaving you 1 trinket.'
    },
    'buyBirdseed': {
        'name': 'Buy more birdseed',
        'buy': 'Birdseed',
        'buyCount': 10,
        'spend': 'Trinkets',
        'spendCount': 1,
        'successMessage': null
    },
    'smallBirdfeeder': {
        'name': 'x1 Small Birdfeeder',
        'buy': 'Small Birdfeeder',
        'buyCount': 1,
        'spend': 'Trinkets',
        'spendCount': 3,
        'successMessage': null
    }
};

var Alerts = [
    '<span>Welcome to your Bird Clicker garden. Scatter some seed for the birds to begin.</span>'
];

// Header component
function Header(){
    return `
        <header>Bird Clicker: a Game of Avian Iteration</header>
    `;
}

// Counters component
function Counters(resources){
    var output = '<div id="resources" class="column">';

    for(const [ key, value ] of Object.entries(resources)){
        if(value > 0){
            output += `<span id="${key}">${key}: ${value}</span>`;
        }
    }

    output += '</div>';

    return output;
}

// Buttons component
function Buttons(clickers){
    var output = '<div id="clickers" class="column">';

    for(const [ key, value ] of Object.entries(clickers)){
        if(Resources[value.spend] >= value.spendCount){
            output += `<span id="${key}" class="button">${value.name}</span>`;
        }
    }
    
    output += '</div>';
    
    return output;
}

// Messages
function Messages(alerts){
    return `<div id="messages" class="column">${alerts.join(' ')}</div>`;
}
// user alert message
function newMessage(text){
    Alerts.push(`<span>${text}</span>`);
}

// rendering HTML content
function render(resources, clickers, alerts){
    root.innerHTML = `
    ${Header()}
    ${Counters(resources)}
    ${Buttons(clickers)}
    ${Messages(alerts)}
`;
    // incoming: CHRISTMAS TREE OF DOOM
    for(const [ key, value ] of Object.entries(clickers)){
        let button = document.querySelector(`#${key}`);

        if(button){
            button.addEventListener('click', (event) => {
                if(Resources[`${value.spend}`] >= value.spendCount){
                    Resources[`${value.buy}`] += value.buyCount;
                    Resources[`${value.spend}`] -= value.spendCount;
            
                    if(value.successMessage){
                        newMessage(`${value.successMessage}`);
                    }
                }
                else{
                    newMessage(`Not enough ${value.spend}`);
                }
                render(Resources, Clickers, Alerts);
            });
        }
    }
}
render(Resources, Clickers, Alerts);

