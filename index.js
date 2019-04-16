import * as State from './state';
import Header from './src/header.js';
import Timer from './src/timer.js';
import Counters from './src/counters.js';
import Messages from './src/messages.js'
import Canvas from './src/canvas.js';
import * as Img from './img';

var root = document.querySelector('#root');


var blackBirdSpriteSheet = new Image();
blackBirdSpriteSheet.src = Img.blackBirdSpriteSheet;

window.onload = function() {
    //canvas rendering happens here
    // game loop can prolly just go hereabouts rather than in a separate module
}