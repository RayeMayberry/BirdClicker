class button {
    constructor(label, buy, ratio, cost){
        this.label = label; // what the button says
        this.buy = buy; // thing to 
        this.ratio = ratio; // how much to buy per cost unit?
        this.cost = cost; // thing to decrease by one
       
    }
    useButton(){
        State.Resources[this.buy] += this.ratio;
        State.Resources[this.cost] --;
    }
}

var feedBirds = new button('feed the birds', 'birds', 1, null);

export default {
    'feedBirds' : feedBirds
}