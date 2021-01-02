class CacheElement {
    constructor(id, value) {
        this.frequency = 1;
        this.id = id;
        this.value = value;
    }
}

class CacheSystem {
    constructor(size) {
        this.size = size;
        this.store = [];
    }
    add(element) {
        // if (this.isEmpty()) {
        //     this.store.push(element)
        // } 
        let elemToAdd = element;
        for (let i = 0; i < this.store.length; i++) {
            if (element.id === this.store[i].id) {
                this.store[i].frequency++;
                elemToAdd = this.store[i];
                this.store.splice(i, 1);
                // this.store.push(this.store[i]);
                // return;
            }
        }
        this.store.push(elemToAdd);
    }
    isEmpty() {
        return this.store.length === 0;
    }
}

const cacheSystem = new CacheSystem(3);
cacheSystem.add(new CacheElement(1, 'one'));
cacheSystem.add(new CacheElement(2, 'two'));
cacheSystem.add(new CacheElement(1, 'one'));
console.log('result', cacheSystem);