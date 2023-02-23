#include <stdio.h>
#include <math.h>

int main()
{
    int search(int* nums, int numsSize, int target);
    int nums[10] = {-1,0,3,5,9,12};

    printf("%d", search(nums, 10, 9));

    return 0;
}

int search(int* nums, int numsSize, int target){
    //Linear search
    // for(int x = 0; x <numsSize; x++){
    //     if(nums[x]==target ){
    //     return x;
    //     }
    // }
    // return -1;

    //binary search with indexes
    // int leftPointer = 0;
    // int rightPointer = numsSize-1;
    // int middle;

    // while(leftPointer <= rightPointer){
    //     middle = floor((rightPointer + leftPointer) / 2);

    //     if(nums[middle] == target){
    //         return middle;
    //     }

    //     else if(nums[middle] > target){
    //         rightPointer = middle - 1;
    //     }

    //     else{
    //         leftPointer = middle + 1;
    //     }
    // }
    // return -1;

    //binary search with pointers
    int leftPointer = 0;
    int rightPointer = numsSize -1;
    int middle;

    // printf("%d, %d", leftPointer, rightPointer);

    while(leftPointer <= rightPointer){

        middle = floor((leftPointer + rightPointer) / 2);

        if(*(nums + middle) > target){
            rightPointer = middle - 1;
        } 
        
        else if(*(nums + middle) < target){
            leftPointer = middle  + 1;
        }

        else{
            return middle;
         }
    }

    return -1;
}
