#include <math.h>

bool searchMatrix(int** matrix, int matrixSize, int* matrixColSize, int target){
    int search(int* nums, int numsSize, int target);

    for(int m = 0; m<= matrixSize-1; m++){
        int result = search( matrix[m], *matrixColSize, target);
        if(result >= 0){
            return 1;
        };
    }
    return 0;
}

int search(int* nums, int numsSize, int target){
    int leftPointer = 0;
    int rightPointer = numsSize-1;
    int middle;

    while(leftPointer <= rightPointer){
        middle = floor((rightPointer + leftPointer) / 2);
        if(nums[middle] > target){
            rightPointer = middle -1;
        }

        else if(nums[middle] < target){
            leftPointer = middle +1;
        }

        else{
            return middle;
        }
    }
    return -1;
}
