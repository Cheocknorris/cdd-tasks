

class VisitorInterface {
    vistit(product) {  }
}

class CheckCalculator extends VisitorInterface {
    constructor() {
        super();
        this.totalPrice = 0;
    }
    visit(product) {
        this.totalPrice = this.totalPrice + product.price;
        if (product.product) {
        this.visit(product.product);
        }
        return this.totalPrice;
    }
}

class VisitableInterface {
    accept(visitor) { }
}

class ProductInterface extends VisitableInterface {
    constructor(price) {
        super();
        this.price = price;
    }
    accept(visitor) {
        return visitor.visit(this);
    }
}

class ThinCrust extends ProductInterface {
    constructor(product) {
        super(10);
        this.name = 'Thin crust';
    }
}

class ThickCrust extends ProductInterface {
    constructor(product) {
        super(12);
        this.name = 'Thick crust';
    }
}

class Mushrooms extends ProductInterface {
    constructor(product) {
        super(.5);
        this.name = 'Mushrooms';
        this.product = product;
    }
}

class Onions extends ProductInterface {
    constructor(product) {
        super(.5);
        this.name = 'Onions';
        this.product = product;
    }
}

class Sausage extends ProductInterface {
    constructor(product) {
        super(.1);
        this.name = 'Sausage';
        this.product = product;
    }
}

class Bacon extends ProductInterface {
    constructor(product) {
        super(.1);
        this.name = 'Bacon';
        this.product = product;
    }
}

class BlackOlives extends ProductInterface {
    constructor(product) {
        super(.5);
        this.name = 'Black Olives';
        this.product = product;
    }
}

class Client {
    run(visitor) {
        let product = new ThickCrust();
        product = new Bacon(product);
        product = new Onions(product);
        visitor.visit(product);
        return visitor.totalPrice;
    }
}

let checkCalculator = new CheckCalculator;
let client = new Client;

console.log(client.run(checkCalculator));


// let product = new ThickCrust();
// product = new Bacon(product);
// product = new Onions(product);

// console.log(product);