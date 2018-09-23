class HashTable {
    constructor (size = 53){
        this.keyMap = new Array(size);
}

    hash(key){
        let total = 0;
        let PRIME_NUMBER = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME_NUMBER + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value){
       //var item = hash(key);
       //var spot = 0;
       this.keyMap[key] = value;
    }

    get(key){
      // var item = hash(key);
       if(!this.keyMap[key]){
           return undefined;
       }
       return this.keyMap[key];
    }
}

var hash = new HashTable();

hash.set(1 , "blue");
hash.set(13 , "purple");
console.log(hash.get(13));
console.log(hash.get(19));
