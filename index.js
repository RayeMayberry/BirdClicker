import Phaser from 'phaser';
import Garden_JSON from './assets/garden.json';
import Grass from './assets/grass_LPC.png';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    parent: 'root',
    backgroundColor: '#2f8136',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    // assets go here!
    this.load.image('tiles', Grass); // load tileset image
    this.load.tilemapTiledJSON('map', Garden_JSON); // load json tilemap made in Tiled
}

function create ()
{
    // stuff gets rendered here!
    const map = this.make.tilemap({key: "map"});
    const tileset = map.addTilesetImage("grass_LPC", "tiles");
    const grassLayer = map.createStaticLayer("grass", tileset, 0, 0);
}

function update ()
{
    // animations happen here
}