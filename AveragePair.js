function averagePair(arr, avg){

    let obj = {};
    let target;

    for(let val in arr){
        obj[val] = (arr[val]);
    }

    for(let i = 0; i< arr.length; i++){
        target = (avg*2)-arr[i];
       if(target in obj){
           return true;
       }
    }
    return false;
}
