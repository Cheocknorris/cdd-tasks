
class SearchInterface {
    constructor(cacheSystem, dataBase) {
        this.cacheSystem = cacheSystem;
        this.dataBase = dataBase;
    }
    searchById(id) {
        if (!this.cacheSystem.searchById(id) 
        && this.dataBase.searchById(id)) {
            let result = this.dataBase.searchById(id);
            this.cacheSystem.addElement(result);
            if (this.cacheSystem.isFull()) this.cacheSystem.removeLeastUsed();
            return result; 
        } else if (this.cacheSystem.searchById(id)) {
            let result = this.cacheSystem.searchById(id);
            this.cacheSystem.removeById(id);
            this.cacheSystem.addElement(result);
            return result;
        } 
    } 
    addToDataBase(element) {
        this.dataBase.addElement(element);
    }
     
}

class CacheSystem {
    constructor() {
        this.store = [];
        this.size = 3;
    }
    addElement(element) {
        this.store.push(element);
    }
    searchById(id) {
        if (typeof id !== 'number') throw new Error("Invalid input");

        if (this.isEmpty()) return  false;

        for (let i = 0; i < this.store.length; i++) {
            if (this.store[i].id === id) {
                let result = this.store[i];
                return result;
            } 
        }
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
        let storeDup = this.store;
        storeDup.splice(0, 1);
        this.store = [...storeDup];
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
                return this.store[i];
            } 
        }
        return false;
    }
}


class CacheElement {
    constructor(id, value) {
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
searchInterface.searchById(1);
searchInterface.searchById(2);
searchInterface.searchById(3);
searchInterface.searchById(4);
searchInterface.searchById(1);
searchInterface.searchById(6);
searchInterface.searchById(1);
console.log(searchInterface.cacheSystem.store);

