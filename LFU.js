// // A caching system keeps copies of data readily available and only in case of 
// // a request for a data element that is not in the cache fetches the data from 
// // the database. If the cache memory is full it removes the least frecuently 
// // requested entry from cache memory. 

// // Implement a caching system that allows accessing data from a given database. 
// // You can use a list of objects as a database. 
// // DATABASE = [object, object, object, object, object, object, object, object]
// // Where object has the structure: 
// // {id: number, value: string};
// // Assume the cache memory size as 3. 

class SearchInterface {
    constructor(cacheSystem, dataBase) {
        this.cacheSystem = cacheSystem;
        this.dataBase = dataBase;
    }
    addToDataBase(element) {
        this.dataBase.addElement(element);
        return true;
    }
    searchById(id) {
        if (this.cacheSystem.searchById(id)) {
            let result = this.cacheSystem.searchById(id);
            return result;
        } else if (!this.cacheSystem.searchById(id) && this.dataBase.searchById(id)) {
            let result = this.dataBase.searchById(id);
            this.cacheSystem.addElement(result);
            return result;
        } else {
            return 'not found'
        }
    }
}

class CacheSystem {
    constructor() {
        this.store = [];
        this.size = 3;
    }
    addElement(element) {
        // if (this.isFull()) return false;

        if (this.isEmpty()) {
            this.store.push(element);
        } else {
            this.store.forEach(item => {
                if (item.id === element.id) {
                    item.frequency++;
                } else {
                    this.store.push(element);
                }
            });
        }   
    }
    searchById(id) {
        if (typeof id !== 'number') throw new Error("Invalid input");

        if (!this.isEmpty()) return false;
        
        this.store.forEach(item => {
            if (item.id === id) {
                console.log('in the cache');
                return item;
            }
        });
        return false;
    }
    removeById(id) {
        if (typeof id !== 'number') throw new Error("Invalid input");

        for (let i = 0; i < this.store.length; i++) {
            if (this.store[i].id === id) {
                let storeDup = this.store;
                storeDup.splice(i, 1);
                this.store = [...storeDup];
            }
        }
    }
    removeLeastUsed() {
        
    }
    isEmpty() {
        return this.store.length === 0;
    }
    isFull() {
        return this.store.length > this.size;
    }
}


class DataBase {
    constructor() {
        this.store = [];
    }
    addElement(element) {
        this.store.push(element);
    }
    searchById(id) {
        if (typeof id !== 'number') throw new Error("Invalid input");

        for (let i = 0; i < this.store.length; i++) {
            if (this.store[i].id === id) {
                console.log('in the db');
                return this.store[i];
            } 
        }
        return false;
    }
}

class CacheElement {
    constructor(id, value) {
        this.frequency = 1;
        this.id = id;
        this.value = value;
    }
}

let cacheSystem = new CacheSystem();
let dataBase = new DataBase();
let searchInterface = new SearchInterface(cacheSystem, dataBase);
searchInterface.addToDataBase(new CacheElement(1, 'one'));
searchInterface.addToDataBase(new CacheElement(2, 'two'));
searchInterface.addToDataBase(new CacheElement(3, 'three'));
searchInterface.addToDataBase(new CacheElement(4, 'four'));
searchInterface.addToDataBase(new CacheElement(5, 'five'));
searchInterface.addToDataBase(new CacheElement(6, 'six'));
console.log(searchInterface.searchById(1));
console.log(searchInterface.cacheSystem.store)
console.log(searchInterface.searchById(2));
console.log(searchInterface.cacheSystem.store)
console.log(searchInterface.searchById(3));
console.log('this one is repeated', searchInterface.searchById(1));
console.log('this one is repeated', searchInterface.searchById(1));
console.log(searchInterface.cacheSystem.store)



// function insert(arr, num) {
//     let arrDup = arr;
//     for (let i = 0; i < arrDup.length; i++) {
//         if (num < arrDup[i]) {
//             arrDup.splice(i, 0, num);
//             break;
//         }
//     }
//     arrDup.push(num);
//     return arrDup;
// }

// const arr = [1,2,3,5];
// console.log(insert(arr, 8));
