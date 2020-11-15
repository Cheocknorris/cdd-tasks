class Motorbike {
    constructor(engine) {
        this.name = 'Motorbike';
        this.engine = engine;
    }
}

class Car {
    constructor(transmision) {
        this.name = 'Car';
        this.transmision = transmision;
    }
}

class Bicycle {
    constructor(frame) {
        this.name = 'Bicycle';
        this.frame = frame;
    }
}

class Order {
    constructor() {
        this.motorbike = null;
        this.car = null;
        this.bicycle = null;
    }
}

class OrderBuilder {
    constructor() {
        this.order = new Order();
    }
    
    addEngine(engineType) {
        if (engineType == '55CC') {
            this.order.motorbike.add55CCEngine();
        } else if (engineType === '100CC') {
            this.order.motorbike.add100CCEngine();
        }
    }
    addSeatCover() {
        this.order.motorbike.addSeatCover();
    }

    requestMotorbike()     {
        this.order.motorbike = new Motorbike();        
        return this;
    }

    requestCar(transmision) {
        this.order.car = new Car(transmision);
        return this;
    }

    requestBicycle(frame) {
        this.order.bicycle = new Bicycle(frame);
        return this;
    }

    finish() {
        return this.order;
    }
}

class MotorBikeFactory {
    constructor() {
        this.motorbikeBuilder = new MotorbikeBuilder();
    }
    create(specification) {
        	for (let spec in specification) {
                switch(spec) {
                    case 'engineType': 
                    this.motorbikeBuilder.addEngine(specification[spec]);
                    break;
                    case 'seatCover': 
                    this.motorbikeBuilder.addSeatCover();                    
                }                
            }
            return this.motorbikeBuilder.finish();
    }
}

class AbstractFactory {
    create(factoryType) {
        if (factoryType == 'MOTOR_BIKE') {
            return new MotorBikeFactory();
        } else if (factoryType === 'CAR') {
            return new CarFactory();
        }
    }
}
class Client {
    placeOrder() {
        let abstractFactory = new AbstractFactory();
        let motorbikeFactory = abstractFactory.create('MOTOR_BIKE');
        let motorbike = motorBikeFactor.create({engineType: '55CC', seatCover: true});
        motorBikeFactor.create({engineType: '55CC'});

        let carFactory = new CarFactory();
        // let orderBuilder = new OrderBuilder();

        // let order = orderBuilder
        //     .requestMotorbike()
        //     .addEngine('55CC')
        //     .requestCar('automatic')
        //     .requestBicycle('26')
        //     .finish();
        // return order;
        }
}


let client = new Client();
console.log(client.placeOrder());
