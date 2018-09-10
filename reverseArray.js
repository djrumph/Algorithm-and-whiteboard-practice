arr = [1,2,3,4,5];

end = arr.length-1; 
temp = 0;

console.log(end);

for(let i = 0; i<Math.max(arr.length/2);i++){

    temp = arr[i];
    arr[i] = arr[end];
    arr[end] =temp;

    end--;

    if(i===end){
        break;
    }

}

console.log(arr);
