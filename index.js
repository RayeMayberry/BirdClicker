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
var addBirds = function addBirds(event){
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
        var element = event.target;

        element.style.backgroundColor = 'lightgrey';
    }
};

function feedBirdsButton(){
    var feedBirds = document.querySelector('#feedBirds');

    feedBirds.addEventListener('click', addBirds);
}
feedBirdsButton();

var addSeed = function addSeed(event){
    if(trinkets.number >= 1){
        trinkets.number --;
        seed.number += 10;
        trinkets.counter.innerHTML = `Trinkets: ${trinkets.number}`;
        seed.counter.innerHTML = `Seed: ${seed.number}`;
    }
    else{
        newMessage('Not enough trinkets');
    }
};

function buySeedButton(){
    var buySeed = document.querySelector('#buySeed');

    buySeed.addEventListener('click', addSeed);
}
buySeedButton();