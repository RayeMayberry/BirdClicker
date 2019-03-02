var birdCount = 0;

//rendering HTML content
var root = document.querySelector(`#root`);
root.innerHTML = `
    <div id="iterators">
        <input id="feedBirds" type="button" value="Click to feed birds">
    </div>
    <div id="trackers">
        <p id="birdCount"></p>
    </div>
    <div id="gameMessages">
    </div>
`;
var birdCountDisplay = document.querySelector("#birdCount")

//basic clicker
var addBirds = function addBirds(event) {
    birdCount++;
    birdCountDisplay.innerHTML = `Birds in garden: ${birdCount}`
}
function feedBirdsButton() {
    var feedBirds = document.querySelector(`#feedBirds`);
    feedBirds.addEventListener("click", addBirds);
};
feedBirdsButton();
