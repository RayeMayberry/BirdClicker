var birds = {
    'name': 'Birds in Garden',
    'number': 0,
    'counter': '<span id="birdsCount">Birds: 0</span>'
};
var seed = {
    'name': 'Birdseed',
    'number': 100,
    'counter': '<span id="seedCount">Birdseed: 0</span>'
};
var trinkets = {
    'name': 'Trinkets',
    'number': 0,
    'counter': '<span id="trinketsCount">Trinkets: 0</span>'
};
// rendering HTML content
var root = document.querySelector('#root');

// rendering html into the page
root.innerHTML = `
	${birds.counter}
    ${seed.counter}
    ${trinkets.counter}
`;


function addResource(resource, interval){
    resource.number += interval;
    resource.counter.innerHTML = `${resource.name}: ${resource.number}`;
}
function spendResource(resource, interval){
    resource.number -= interval;
    resource.counter.innerHTML = `${resource.name}: ${resource.number}`;
}

// write messages for the player
function newMessage(text){
    var messages = document.querySelector('#messages');

    messages.innerHTML += `<span>${text}</span>`;
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
        trinkets.number --;
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