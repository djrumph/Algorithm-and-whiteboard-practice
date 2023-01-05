maxSubarraySum([1,4,6,2,6,24,57,3,5,4,6], 3);

//given a array and a number, find the maximum sum in the array from the elements equal to the number of elements given
function maxSubarraySum(arr, num){

    let maxSum = 0;
    let tempSum = 0;
    if(arr.length <num) return null;
    //get initial sum of n elements
    for(let i= 0; i< num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    //go through array and if there is a sum bigger than tempSum
    //assign it to maxSum
    for(let i = num; i<arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
