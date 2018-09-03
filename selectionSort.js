arr = [1,2,43,64,24,76,46,876,23,45,56,24];

console.log(arr);

for(let i = 0; i< arr.length; i++){
    console.log("NEW LOOP" + i);
smallest = i;
console.log("smallest is: " + arr[smallest]);
console.log("arr[i] is: " + arr[i]);




    for(let j = i; j< arr.length; j++){
            console.log("original j: " + arr[j]);
        if(arr[j] < arr[smallest]){
            console.log("item comparing against: " + arr[j]);
            smallest = j;
            console.log("new smallest: " + arr[smallest]);
        }


    
}

        if (arr[smallest] != arr[i]){
             var temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp
            console.log("a switch happened");
        }
console.log(arr);
}



