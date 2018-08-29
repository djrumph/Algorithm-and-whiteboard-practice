function binarySearch(arr, num){
let start = 0;
let end = arr.length-1;
let pointer = Math.floor((start+end)/2);

while(arr[pointer] !== num && start <= end){

    if(num <arr[pointer]){
        end = pointer -1;
    } else{
        start = pointer +1;
    }
    pointer = Math.floor((start+end) /2);
}

if(arr[pointer] === num){
    return pointer
}




}
