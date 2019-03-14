
var root = document.querySelector('#root');

var Resources = {
    'Birds': 0,
    'Birdseed': 100,
    'Trinkets': 0
};

var Clickers = {
    'scatterBirdseed': {
        'name': 'Scatter some birdseed',
        'buy': Resources.Trinkets,
        'spend': Resources.Birdseed,
        'price': 10,
        'errorMessage': 'Not enough birdseed'
    },
    'buyBirdseed': {
        'name': 'Buy more birdseed',
        'buy': Resources.Trinkets,
        'spend': Resources.Birdseed,
        'price': 10,
        'errorMessage': 'Not enough trinkets'
    }
};


// component functions
function Header(){
    return `
        <header>Bird Clicker: an Iterative Game</header>
    `;
}

function Counters(resources){
    var output = '<div id="resources" class="column">';

    // var entries = Object.entries(resources);

    // entries.forEach((entry) => (entry[1] > 0 ? output += `<span>${entry[0]}: ${entry[1]}</span>` : output += ''));
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
    
    destination.innerHTML = `${text}`;
}

// making buttons do things
function manageResources(clickers){
    for(const [ key, value ] of Object.entries(clickers)){
        // could put contents in the Buttons function if i could figure out how to turn the HTML elements into an object without passing them thru Render() first, ie not having to use document.getElementById
        let button = document.getElementById(`${key}`);

        button.addEventListener('click', (event) => {
            if(value.spend > 0){
                value.buy++;
                value.spend -= value.price;
            }
            else{
                newMessage(`${value.errorMessage}`);
            }
        });
    }
}

manageResources(Clickers);