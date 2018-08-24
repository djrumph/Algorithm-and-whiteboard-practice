//function to find highest sum of n numbers in an array in O(n) time


arr = [1,2,3,4,4,4,4,3,2,1];

num = 4;

maxSum = 0;

high = 10;

for(let i = num ; i< arr.length; i++){

   // console.log(high);

    high = high + arr[i] -arr[i-num];

    maxSum = Math.max(high,maxSum);

}



console.log(maxSum);
