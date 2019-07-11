import Phaser from 'phaser';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
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
    this.load.image("tiles", './assets/grass_LPC.png')
    this.load.tilemapTiledJSON("map", './assets/garden.json')
}

function create ()
{
    // stuff gets rendered here!
    const map = this.make.tilemap({key: "map"});
    const tileset = map.addTilesetImage('./assets/garden.json', "tiles");

    const layer = map.createStaticLayer(0, tileset, 0,0);
    
}

function update ()
{
    // animations happen here
}