var birds = 0;
var seed = 100;
var trinkets = 0;

//rendering HTML content
var root = document.querySelector(`#root`);
root.innerHTML = `
    <ul id="resources" class="column">
        <li>
            <span id="trinketsCount">Trinkets: ${trinkets}</span>
        </li>
        <li>
            <span id="seedCount">Birdseed: ${seed}</span>
            <span id="feedBirds" class="button">Feed (x10)</span>
            <span id="buySeed" class="button">Buy</span>
        </li>
    </ul>
    <ul id="stats" class="column">
        <span id="birdsCount"></span>
        <span id="birdfeed"></span>
    </ul>
    <div id="messages" class="column">
    </ul>
`;
// txt displays of resource stats
var birdsCount = document.querySelector("#birdsCount");
var seedCount = document.querySelector("#seedCount");
var trinketsCount = document.querySelector("#trinketsCount");

// write messages for the player
function newMessage(text){
    var messages = document.querySelector("#messages");
    messages.innerHTML += `<span>${text}</span>`;
}

//basic clicker
var addBirds = function addBirds(event) {
    if(seed >= 10) {
        birds++;
        seed -= 10;
        trinkets++;
        birdsCount.innerHTML = `Birds in garden: ${birds}`;
        seedCount.innerHTML = `Birdseed: ${seed}`;
        trinketsCount.innerHTML = `Trinkets: ${trinkets}`;
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

