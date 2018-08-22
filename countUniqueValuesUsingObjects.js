//counts unique values

function countUniqueValues(arr){
    
let ob = {};
let count = 0;

for(let val of arr){

    if(!ob[val]){
         ob[val] = 1;
        count++;
    }

}
return count;
}
