arr = [1,2,3,4,5]

linearSearch(arr,5);
function linearSearch(arr, num){

let    count = 0;

for(let val in arr){

    if(arr[val] ===num){

        return count;
    }
    count++;
}

return -1;

}
