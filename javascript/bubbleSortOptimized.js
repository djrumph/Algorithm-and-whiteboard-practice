//arr = [1,2,43,64,23,76,45,876,23,45,56];

arr = [30,1,5,8,9,10]

console.log(arr);

for(let i = arr.length-1; i>= 0; i--){

    finish = true;

    for(let j = 0; j<= i-1; j++){
        console.log(j);

        if(arr[j] > arr[j+1]){
        
    var temp = arr[j];
    arr[j] = arr[j+1];
    arr[j+1] = temp;
    finish = false;
        }

    
}
    if(finish){
        break;
    }




}

console.log(arr);


function swap(arr, index1, index2){

    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;


}
