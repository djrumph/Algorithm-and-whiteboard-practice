//function to find highest sum of n numbers in an array in O(n) time


sumInArray( [1,2,3,4,4,4,4,3,2,1], 3);

function sumInArray (arr, num){

maxSum = 0;
high = 0;

//get the sum of the first n numbers at the beginning of the array
for(let i = 0; i<num; i++){
    high += arr[i];
}


//find the highest sum in the range of n numbers within the array
for(let i = num ; i< arr.length; i++){

   // console.log(high);

    high = high + arr[i] -arr[i-num];

    maxSum = Math.max(high,maxSum);

}

return maxSum;
}
