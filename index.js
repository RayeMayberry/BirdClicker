//rendering HTML content
var root = document.querySelector(`#root`);
root.innerHTML = `
    <ul id="resources" class="column">
        <li>
            <span id="trinketsCount"></span>
        </li>
        <li>
            <span id="seedCount">Seed: </span>
            <span id="feedBirds" class="button">Feed (x10)</span>
            <span id="buySeed" class="button">Buy</span>
        </li>
    </ul>
    <ul id="stats" class="column">
        <li>
            <span id="birdsCount"></span>
        </li>
    </ul>
    <div id="messages" class="column">
    </ul>
`;
var birds = {
    number : 0,
    counter : document.querySelector("#birdsCount")};
var seed = {
        number: 100,
        counter : document.querySelector("#seedCount")
};
var trinkets = {
    number: 0,
    counter: document.querySelector("#trinketsCount")
};

// write messages for the player
function newMessage(text){
    var messages = document.querySelector("#messages");
    messages.innerHTML += `<span>${text}</span>`;
}

//basic clicker
var addBirds = function addBirds(event) {
    if(seed.number >= 10) {
        birds.number++;
        seed.number -= 10;
        trinkets.number++;
        birds.counter.innerHTML = `Birds in Garden: ${birds.number}`;
        seed.counter.innerHTML = `Seed: ${seed.number}`;
        trinkets.counter.innerHTML = `Trinkets: ${trinkets.number}`;
        newMessage("A bird landed in the garden!")
        newMessage("-10 birdseed");
        newMessage("A bird left you 1 trinket!")
    } else {
        newMessage("Not enough birdseed");
        var element = event.target;
        element.style.backgroundColor = "lightgrey";

    }
};
function feedBirdsButton(){
    var feedBirds = document.querySelector(`#feedBirds`);
    feedBirds.addEventListener("click", addBirds);
    
};
feedBirdsButton();

var addSeed = function addSeed(event){
    if(trinkets.number >= 1){
        trinkets.number --;
        seed.number += 10;
        trinkets.counter.innerHTML= `Trinkets: ${trinkets.number}`;
        seed.counter.innerHTML = `Seed: ${seed.number}`;
    } else{
        newMessage("Not enough trinkets");
    }
};
function buySeedButton(){
    var buySeed = document.querySelector(`#buySeed`)
    buySeed.addEventListener("click", addSeed);
};
buySeedButton();