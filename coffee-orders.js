

class CoffeeMenu {
    constructor() {
        this.coffeeSpecialties = [];
        this.condiments = [];
    }

    addCoffeeSpecialty(coffeeSpecialty) {
        this.coffeeSpecialties.push(coffeeSpecialty);
        return true;
    }

    deleteCoffeeSpecialty(coffeeSpecialty) {
        for (let i = 0; i < this.coffeeSpecialties.length; i++) {
            if (this.coffeeSpecialties[i] === coffeeSpecialty) {
                this.coffeeSpecialties.splice(i, 1);
                return true;
            }
        }
    }

    

}

class CoffeeSpecialty {
    constructor(name, price) {
        this.name = name; 
        this.price = price;  
        this.condiments = [];      
    }

    addCondiment(condiment) {
        this.condiments.push(condiment);
        return true;
    }

    deleteCondiment(condiment) {
        for (let i = 0; i < this.condiments.length; i++) {
            if (this.condiments[i] === condiment) {
                this.condiments.splice(i, 1);
                return true;
            }
        }
    }

    makeGrande() {
        this.price = this.price * 1.2;
        return true;
    }
        
    makeVenti() {
        this.price = this.price * 1.4;
        return true;
    }
        
    calculateFinalPrice() {
        return this.condiments.reduce((price, condiment) => {
            return price + condiment.price;
            }, this.price).toFixed(2);
    }
} 

class BakeryMenu {
    constructor() {
        this.bakerySpecialties = [];
    }

    addbakerySpecialty(bakerySpecialty) {
        this.bakerySpecialties.push(bakerySpecialty);
        return true;
    }

    deleteCoffeeSpecialty(bakerySpecialty) {
        for (let i = 0; i < this.bakerySpecialties.length; i++) {
            if (this.bakerySpecialties[i] === bakerySpecialty) {
                this.bakerySpecialties.splice(i, 1);
                return true;
            }
        }
    }
}

class Menu {
    constructor() {
        this.categories = [];
    }

    addMenu(category) {
        this.categories.push(category);
        return true;
    }

    deleteMenu(category) {
        for (let i = 0; i < this.categories.length; i++) {
            if (this.categories[i] === category) {
                this.categories.splice(i, 1);
                return true;
            } 
        }
    }    
}


const menu = new Menu;
const coffeeMenu = new CoffeeMenu;
const bakeryMenu = new BakeryMenu;
const houseBlend = new CoffeeSpecialty('houseBlend', 0.89);
const darkroast = new CoffeeSpecialty('darkRoast', 0.99);
const decaf = new CoffeeSpecialty('decaf', 1,05);
const espresso = new CoffeeSpecialty('espresso', 1.99);


menu.addMenu(coffeeMenu);
menu.addMenu(bakeryMenu);
console.log(menu.categories[0].addCoffeeSpecialty(houseBlend), true);
console.log(menu.categories[0].addCoffeeSpecialty(darkroast), true);
console.log(menu.categories[0].addCoffeeSpecialty(decaf), true);
console.log(menu.categories[0].addCoffeeSpecialty(espresso), true);
console.log(menu.categories[0]);






// console.log(coffeeMenu);
// coffeeMenu.deleteCoffeeSpecialty(houseBlend);
// console.log(coffeeMenu);

// class Condiment {
//     constructor(name, price) {
//         this.name = name 
//         this.price = price;        
//     }
// }


// class Coffee {
//     constructor() {
//         this.price;
//         this.condiments = [];
//     }

//     addCondiment(condiment) {
//         this.condiments.push(condiment);
//     }

//     makeGrande() {
//         this.price = this.price * 1.2;
//         return true;
//     }

//     makeVenti() {
//         this.price = this.price * 1.4;
//         return true;
//     }

//     calculateFinalPrice() {
//         return this.condiments.reduce((price, condiment) => {
//             return price + condiment.price;
//         }, this.price).toFixed(2);
//     }
// }


// const coffee = new Coffee;
// const steamedMilk = new Condiment('steamed_milk', .1);
// const mocha = new Condiment('mocha', .2);
// Object.assign(coffee, {
//     price: 1.8
// });
// console.log(coffee);
// console.log(coffee.makeGrande(), true);
// console.log(coffee);
// coffee.addCondiment(steamedMilk);
// coffee.addCondiment(mocha);
// console.log(coffee);
// console.log(coffee.calculateFinalPrice());
