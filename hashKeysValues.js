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
      // this.keyMap[key] = value;
       let index = this.hash(key);
       if(!this.keyMap[index]){
           this.keyMap[index] = [];
       }
       this.keyMap[index].push([key,value]);
    }

    get(key){
        let index = this.hash(key);
      // var item = hash(key);
       if(this.keyMap[index]){
           for(let i =0; i<this.keyMap[index].length; i++){
               if(this.keyMap[index] [i][0] === key) {
                   return this.keyMap[index][i][1];
               }
           }
       }
       return undefined;
    }

    keys(){
        let foundKeys = [];
         for(let i =0; i<this.keyMap.length; i++){
             if(this.keyMap[i]){
                 for(let i = 0; i<this.keyMap[0].length; i++){
                 foundKeys.push(this.keyMap[0][i][0]);
                 }
             }

         }
        return foundKeys;
    }
    values(){
        let foundKeys = [];
         for(let i =0; i<this.keyMap.length; i++){
             if(this.keyMap[i]){
                 for(let i = 0; i<this.keyMap[0].length; i++){
                 foundKeys.push(this.keyMap[0][i][1]);
                 }
             }

         }
        return foundKeys;
    }

}

let hash = new HashTable();

hash.set(1 , "blue");
hash.set(13 , "purple");
console.log(hash.get(13));
console.log(hash.get(19));
