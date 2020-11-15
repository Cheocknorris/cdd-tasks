import Order from './order.mjs'



class Orderbuilder {
    constructor() {
        this.order = new Order();
    }
}

const orderbuilder = new Orderbuilder();

console.log(orderbuilder);