import Phaser from 'phaser';
import Grass from './assets/grass_LPC.png';
import Garden from './assets/garden.json';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 640,
    parent: 'root',
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
    this.load.image("tiles", Grass)
    this.load.timemapTiledJSON("map", Garden)
}

function create ()
{
    // stuff gets rendered here!
    const map = this.make.tilemap({key: "map"});
    const tileset = map.addTilesetImage(Garden, "tiles");

    const layer = map.createStaticLayer(0, tileset, 0,0);
    
}

function update (time, delta)
{
    // animations happen here
}