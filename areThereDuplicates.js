//write a function to determine if there are duplicates in whatever argument is passed into the array

function areThereDuplicates(...args){

let obj = {};

for(let val of args){
    if(!(val in obj)){
        obj[val] = val;
    }
    else{
        return true;
    }
}

return false;

}

areThereDuplicates('a','b','c','a')
