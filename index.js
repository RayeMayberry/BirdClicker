import Phaser from 'phaser';
import Garden from  './assets/garden.png';

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
    this.load.image("garden",Garden);
}

function create ()
{
    // stuff gets rendered here!
    this.add.image(400,400, "garden");
}

function update ()
{
    // animations happen here
}