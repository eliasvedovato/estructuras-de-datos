/* 

Hash Tables: es un objeto que tiene un paso intermedio,
llamado Hash Function que toma la key y devuelve el valor

{  
    "key": "value",
    "nombre": "Diego"
} 

podemos tener una lista con listas adentro [[],[],[]]

search, set and delete

Buckets: espacios disponibles en nuestra HashTable

*/

class HashTable {
    constructor(size) {
      this.data = new Array(size);
    }
    hashMethod(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        //   generando un número random con charCodeAt()
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }
    set(key, value) {
      const address = this.hashMethod(key);
    //   si no existe la dirección podemos empezar a guardar la información
      if (!this.data[address]) {
        this.data[address] = [];
      }
    //   si ya existe una dirección, agrega un nuevo array con la nueva información
      this.data[address].push([key, value]);
      return this.data;
    }
    get(key){
        const address = this.hashMethod(key)
        // índice donde se encuentra el valor
        const currentBucket = this.data[address]
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }
    getAllKeys() {
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i]) {
            for (let j = 0; j < this.data[i].length; j++) {
              keys.push(this.data[i][j][0]);
            }
          }
        }
        return keys;
    }
    
    remove(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
          for (let i = 0; i < currentBucket.length; i++) {
            if (currentBucket[i][0] === key) {
              const deletedValue = this.data[address][i];
              this.data[address].splice(i, 1);
              return deletedValue;
            }
          }
        }
        return undefined;
    }
}
  
const myHashTable = new HashTable(50);

myHashTable.set("Diego", 1990)
myHashTable.set("Lucas", 1995)
myHashTable.set("Mariana", 2000)
myHashTable.get("Mariana")