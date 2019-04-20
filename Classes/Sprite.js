import Canvas from '../src/canvas.js';

export default class Sprite{
    constructor(src, size, index){
        this.src =src, //image object
        this.size=size; //array [width, height]
        this.index = index; //array [column,row]
    }
    render(layer, position){
        //position is array [x,y]
        layer.drawImage(
            this.src,
            this.index[0] * this.size[0],
            this.index[1] * this.size[1],
            this.size[0],
            this.size[1],
            position[0],
            position[1],
            this.size[0],
            this.size[1]
        )
    }
}