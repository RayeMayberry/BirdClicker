class Resource {
    constructor(amount, cost){
        this.amount = null;
        this.cost = cost;
    }
    buy(qty){
        this.amount += qty;
        return this.amount;
    }
    spend(qty){
        if (this.amount > 0){
            this.amount -= qty;
        }
        return this.amount;
    }
}

class Button {
    constructor(label, sold, bought){
        this.label = label;
        this.sold = sold; // resource to subtract
        this.bought = bought; // resource to add
    }
    exchange(ratio){
        if(this.sold == true){
            this.sold.sell(ratio);
        }
        this.bought.buy(1);
        // do math good
    }
}

var birds = new Resource();

var trinkets = new Resource();

var feedBirds = new Button("feed the birds", null, birds);

export default {
    Resources : [birds, trinkets],
    Buttons: [feedBirds]
}
