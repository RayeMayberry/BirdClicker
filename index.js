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
        'successMessage': 'A bird ate some birdseed and flew away, leaving you 1 trinket.',
        'errorMessage': 'Not enough birdseed'
    },
    'buyBirdseed': {
        'name': 'Buy more birdseed',
        'buy': 'Birdseed',
        'buyCount': 10,
        'spend': 'Trinkets',
        'spendCount': 1,
        'successMessage': '',
        'errorMessage': 'Not enough trinkets'
    },
    'smallBirdfeeder': {
        'name': 'x1 Small Birdfeeder',
        'buy': 'Small Birdfeeder',
        'buyCount': 1,
        'spend': 'Trinkets',
        'spendCount': 5,
        'successMessage': '',
        'errorMessage': 'Not enough trinkets'
    }
};


// component functions
function Header(){
    return `
        <header>Bird Clicker: a Game of Avian Iteration</header>
    `;
}

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

function Messages(){
    return '<div id="messages" class="column"><span>Welcome to your Bird Clicker garden. Scatter some seed for the birds to begin.</span></div>';
}
// user alert message
function newMessage(text){
    var output = document.querySelector('#messages');
    
    output.innerHTML += `<span>${text}</span>`;
}

// rendering HTML content
function render(resources, clickers){
    root.innerHTML = `
    ${Header()}
    ${Counters(resources)}
    ${Buttons(clickers)}
    ${Messages()}
`;
    // incoming: CHRISTMAS TREE OF DOOM
    for(const [ key, value ] of Object.entries(clickers)){
        let button = document.querySelector(`#${key}`);

        console.log(button);

        if(button){
            button.addEventListener('click', (event) => {
                if(Resources[`${value.spend}`] >= value.spendCount){
                    Resources[`${value.buy}`] += value.buyCount;
                    Resources[`${value.spend}`] -= value.spendCount;
            
                    render(Resources, Clickers);
            
                    newMessage(`${value.successMessage}`);
                }
                else{
                    newMessage(`${value.errorMessage}`);
                }
            });
        }
    }
}
render(Resources, Clickers);

