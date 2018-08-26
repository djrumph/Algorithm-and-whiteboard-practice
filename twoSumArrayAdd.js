// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

twoSum([1,8,10,21], 31);

 
function twoSum (nums, target) {
let array = [];
let firstSum = 0;
let highSum = 0; 

for(let i = 0; i < 2; i++ ){
    firstSum += nums[i];

}

  if(firstSum === target){
     return true;
     array = [0, 1];

     return array;
  }
   
    for(let i = 1; i<= nums.length -2; i++){
          firstSum = firstSum - nums[i-1] + nums[ig+1];

         if(firstSum === target){
         array = [i, i+1];

         return array;
         }
     }
};
