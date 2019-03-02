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
    <div id="gameMessages" class="column">
    </div>
`;
var birdsCount = document.querySelector("#birdsCount");
var seedCount = document.querySelector("#seedCount");
var gameMessages = document.querySelector("#gameMessages");

//basic clicker
var addBirds = function addBirds(event) {
    birds++;
    seed -= 10;
    birdsCount.innerHTML = `Birds in garden: ${birds}`;
    seedCount.innerHTML = `Birdseed: ${seed}`;
    gameMessages.innerHTML += `<span>-10 birdseed</span>`;
    gameMessages.innerHTML += `<span>A bird landed in the garden!</span>`;
}
function feedBirdsButton() {
    var feedBirds = document.querySelector(`#feedBirds`);
    feedBirds.addEventListener("click", addBirds);
};
feedBirdsButton();
