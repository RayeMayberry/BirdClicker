var birds = 0;
var seed = 100;
var trinkets = 0;

//rendering HTML content
var root = document.querySelector(`#root`);
root.innerHTML = `
    <div id="resources" class="column">
        <span id="seedCount">Birdseed: ${seed}</span>
        <span id="feedBirds" class="button">Click to feed birds</span>
    </div>
    <div id="stats" class="column">
        <span id="birdsCount"></span>
        <span id="birdfeed"></span>
    </div>
    <div id="messages" class="column">
    </div>
`;
var birdsCount = document.querySelector("#birdsCount");
var seedCount = document.querySelector("#seedCount");
// write messages for the player
var messages = document.querySelector("#messages");
function newMessage(text){
    messages.innerHTML += `<span>${text}</span>`;
}

//basic clicker
var addBirds = function addBirds(event) {
    if(seed > 0) {
        birds++;
        seed -= 10;
        birdsCount.innerHTML = `Birds in garden: ${birds}`;
        seedCount.innerHTML = `Birdseed: ${seed}`;
        newMessage("A bird landed in the garden!")
        newMessage("-10 birdseed");
    } else {
        newMessage("Not enough birdseed");
    }
}
function feedBirdsButton(){
    var feedBirds = document.querySelector(`#feedBirds`);
    feedBirds.addEventListener("click", addBirds);
    
};
feedBirdsButton();
