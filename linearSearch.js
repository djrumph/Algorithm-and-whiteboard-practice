//basic linear search function
arr = [1,2,3,4,5]

linearSearch(arr,4);
function linearSearch(arr, num){

for(val in arr){

    if(arr[val] ===num){

        return arr.indexOf(arr[val]);
    }
}

return -1;

}
