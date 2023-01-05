function secondSmallest(arr){
    let min = arr[0];
    let secondMin = arr[1];
    for(let i = 0; i< arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            
        }
        if(arr[i] > min && arr[i] < secondMin){
            secondMin = arr[i];
            console.log(secondMin);
        }
    }

    return [min, secondMin];

}


secondSmallest([1,5,9,3,6,7,2])
