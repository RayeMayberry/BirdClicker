
var root = document.querySelector('#root');

var Resources = [
    {
        'name': 'Birds in Garden',
        'number': 0
    },
    {
        'name': 'Birdseed',
        'number': 100
    },
    {
        'name': 'Trinkets',
        'number': 0
    }
];
var Clickers = [
    {
        'name': 'Click to feed birds!',
        'cost': 10,
        'cost-units': 'trinkets'
    }
];

// component functions
function Header(){
    return `
        <header>Bird Clicker: an Iterative Game</header>
    `;
}
function Counters(resources){
    var output = '<div id="resources" class="column">';

    resources.map((resource) => output += `<span>${resource.name}: ${resource.number}</span>`);
    output += '</div>';

    return output;
}
function Buttons(clickers){
    // same as Counters but for clickers in lieu of resources
    var output = '<div id="clickers" class="column">';

    clickers.map((clicker) => output += `<span class="button">${clicker.name}</span>`);

    output += '</div>';
    
    return output;
}
function Messages(){
    return '<div id="messages"></div>';
}

// rendering HTML content

root.innerHTML = `
    ${Header()}
    ${Counters(Resources)}
    ${Buttons(Clickers)}
    ${Messages()}
`;


function addResource(resource, interval){
    resource.number += interval;
    resource.counter.innerHTML = `${resource.name}: ${resource.number}`;
}
function spendResource(resource, interval){
    resource.number -= interval;
    resource.counter.innerHTML = `${resource.name}: ${resource.number}`;
}


// basic clicker
function addBirds(event){
    var element = event.target;

    if(seed.number >= 10){
        addResource(birds, 1);
        spendResource(seed, 10);
        addResource(trinkets, 1);
        newMessage('A bird landed in the garden!');
        newMessage('-10 birdseed');
        newMessage('A bird left you 1 trinket!');
    }
    else{
        newMessage('Not enough birdseed');
        element.style.backgroundColor = 'lightgrey';
    }
}

// change this function so that birds leave trinkets but dont stay in garden
function feedBirdsButton(){
    var feedBirds = document.querySelector('#feedBirds');

    feedBirds.addEventListener('click', addBirds);
}
feedBirdsButton();

function addSeed(event){
    var element = event.target;

    if(trinkets.number >= 1){
        trinkets.number--;
        seed.number += 10;
        trinkets.counter.innerHTML = `Trinkets: ${trinkets.number}`;
        seed.counter.innerHTML = `Seed: ${seed.number}`;
    }
    else{
        newMessage('Not enough trinkets');
        element.style.backgroundColor = 'lightgrey';
    }
}

function buySeedButton(){
    var buySeed = document.querySelector('#buySeed');

    buySeed.addEventListener('click', addSeed);
}
buySeedButton();