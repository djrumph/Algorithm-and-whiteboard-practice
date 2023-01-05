function replaceDuplicates(arr){
    let obj = {};

    let arr2 = [];

    for(val of arr){
        if(!(val in obj)){
            arr2.push(val);
             obj[val] = val;
        }
    }

    return arr2;

}

replaceDuplicates([1,1,3,3,5,6]);
