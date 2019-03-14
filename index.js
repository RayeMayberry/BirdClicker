/* eslint-disable no-loop-func */

var root = document.querySelector('#root');

var Resources = {
    'Birds': 0,
    'Birdseed': 100,
    'Trinkets': 0
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
    }
};


// component functions
function Header(){
    return `
        <header>Bird Clicker: an Incremental Game</header>
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

    // for each object in the Clickers array, create a button with a name that manipulates resources
    for(const [ key, value ] of Object.entries(clickers)){
        output += `<span id="${key}" class="button">${value.name}</span>`;
    }
    
    output += '</div>';
    
    return output;
}

function Messages(){
    return '<div id="messages"></div>';
}

// rendering HTML content

function render(){
    root.innerHTML = `
    ${Header()}
    ${Counters(Resources)}
    ${Buttons(Clickers)}
    ${Messages()}
`;
}
render();

// user alert message
function newMessage(text){
    var destination = document.querySelector('#messages');
    
    destination.innerHTML += `<span>${text}</span>`;
}

// making buttons do things
function manageResources(clickers){
    for(const [ key, value ] of Object.entries(clickers)){
        let button = document.getElementById(`${key}`);

        button.addEventListener('click', (event) => {
            if(Resources[`${value.spend}`] >= value.spendCount){
                Resources[`${value.buy}`] += value.buyCount;
                Resources[`${value.spend}`] -= value.spendCount;
                
                newMessage(`${value.successMessage}`);
            }
            else{
                newMessage(`${value.errorMessage}`);
            }
            console.log(Resources);
        });
    }
}

manageResources(Clickers);