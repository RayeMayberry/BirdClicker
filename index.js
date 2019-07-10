import Phaser from 'phaser';
import Overworld from './assets/overworld_tileset_grass.png';

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
    this.load.image('overworld', Overworld);

}

function create ()
{
    // code for bg tiles
    const garden = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
    ];
    const map = this.make.tilemap({ data: garden, tileWidth: 16, tileHeight: 16 });
    const tiles = map.addTilesetImage("overworld");
    const layer = map.createStaticLayer(0, tiles, 0, 0);
}

function update (time, delta)
{
}