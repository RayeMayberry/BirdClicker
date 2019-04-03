import * as State from './';

class button {
    constructor(label, buy, cost, ratio){
        this.label = label; // what the button says
        this.buy = buy; // thing to 
        this.cost = cost; // thing to decrease by one
        this.ratio = ratio; // cost of one unit?
       
    }
    useButton(){
        if(State.Resources[this.cost] >= this.ratio){
            State.Resources[this.buy] ++;

            State.Resources[this.cost] -= this.ratio;
        }
        else if(this.cost == false){
            State.Resources[this.buy] ++;
        }
        else{
            State.Messages.push(`Not enough ${this.cost}`)
        }
    }
}


var feedBirds = new button('feed the birds', 'birds', '', 0);

var buyBirdfeeder = new button('buy birdfeeder', 'birdfeeders', 'trinkets', 10 );

export default {
    'feedBirds' : feedBirds,
    'buyBirdfeeder': buyBirdfeeder
}