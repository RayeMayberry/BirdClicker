//rendering HTML content
var root = document.querySelector(`#root`);
root.innerHTML = `<input id="feedBirds" type="button" value="Click to feed birds">`;

// handling button functionalities
var birdCount = 0;

var addBirds = function addBirds(event) {
    birdCount++;
    console.log(birdCount);
}

function feedBirdsButton() {
    var feedBirds = document.querySelector(`#feedBirds`);
    feedBirds.addEventListener("click", addBirds);
};

feedBirdsButton();