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

function averagePair(arr, num){
    let left = 0;
    let right = arr.length-1;

    while(left < right){
        if((arr[right] + arr[left])/2 === num){
            return true;
        }
        else if((arr[right] + arr[left])/2 > num){
            right--;
        }
        else{
            left++;
        }

    }

    return false;

}
