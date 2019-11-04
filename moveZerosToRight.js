function moveZerosToRight(arr){
    let right = arr.length-1;
    let left = 0;
    let temp;
    //while right is less than left
    while(right > left){
        //if right number is zero
        if(arr[right] ===0){
        //decrementright pointer
        right--;
        //go to next version of loop.
        continue;
        }
        //if right number is not 
        else{
            //check if left number is zero
            //if it is, swap values of left and right pointers,
            if(arr[left] ===0){
                 temp = arr[left]
                 arr[left] = arr[right];
                 arr[right] =temp;
                 //decrement right pointer
                 right--;
                 //increment left pointer
                 left++;
            }
            //else increment left pointer.
            else{
                left++;
                //go to next iteration of loop
                continue;
            }
        }
    }
    return arr;
}
